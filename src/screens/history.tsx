import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';
import { HiDotsVertical, HiOutlineSearch } from 'react-icons/hi';
import { HiArrowUpTray } from 'react-icons/hi2';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useEffect,useRef } from 'react';
import { set } from 'date-fns';

import Highlight from 'react-highlight-words'; // Import thư viện
import { useDownloadExcel } from 'react-export-table-to-excel';

interface HistoryItem {
  id: string;
  printer: string;
  price: string;
  method: string;
  date: Date;
  status: string;
}

const Badget = (status:string) => {
  switch (status) {
    case "succes":
      return(
        <span className="bg-green-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Thành công</span>
      )
    case "pending":
      return(
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Đang xử lý</span>
      )
    default:
      return(
    <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Thất bại</span>
    )
  }
}


const HistoryPage = () => {


  const [historyData, setHistoryData] = useState<HistoryItem[]>([]);
  const [renderHisData,setHisData] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // State để lưu từ khóa tìm kiếm


  useEffect(() => {
    // Fetch the data from the API
    fetch('http://localhost:3002/history')
      .then(response => response.json())
      .then(data => {
                      setHistoryData(data)
                      setHisData([])
                    })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  // console.log(historyData)

  const handleFilter = (status:string) => {
    if(status == "all"){
      setHisData(historyData)
      return
    }
    setHisData(historyData.filter(row => row.status == status))
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === '') {
      setHisData(historyData); // Nếu không có từ khóa tìm kiếm, hiển thị tất cả
    } else {
      // Lọc dữ liệu theo tên (printer) và cập nhật danh sách render
      const filteredData = historyData.filter(item =>
        item.printer.toLowerCase().includes(term.toLowerCase()) // Lọc dựa vào trường 'printer'
      );
      setHisData(filteredData);
    }
  };

  const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

  const [date, setDate] = useState<DateRange>();

  const formatDate = (date: Date | undefined) => {
    if (!date) return 'Chưa chọn';
    return date.toLocaleDateString();
  };
  const parseDate = (dateStr: Date) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`); // Chuyển đổi sang định dạng 'YYYY-MM-DD'
  };
  const handleSelect = (selectedDates: DateRange) => {
    setDate(selectedDates);
    
    // Lấy các giá trị từ selectedDates
    const { from, to } = selectedDates;
    if (!from || !to) return; // Nếu không có từ ngày hoặc đến ngày, không làm gì

    // Chuyển đổi từ ngày và đến ngày thành đối tượng Date
    const fromDate = new Date(from);
    const toDate = new Date(to);

    // console.log("1",fromDate)
    // console.log("2",toDate)
    // Lọc dữ liệu từ historyData
    const filteredData = historyData.filter(item => {
      const itemDate = parseDate(item.date);  // Sử dụng hàm parseDate để chuyển chuỗi thành Date
      console.log(itemDate)
      return itemDate >= fromDate && itemDate <= toDate; 
    });

    // Cập nhật dữ liệu đã lọc
    setHisData(filteredData);
  };


  const [, setTab] = useState<'all' | 'success' | 'fail' | 'pending'>('all');
  return (
    <div className='p-6'>
      <div className='flex justify-between mb-6'>
        <div className='h-10 flex gap-3'>
          <Input
            className='border'
            style={{border:"1px solid #000"}}
            icon={<HiOutlineSearch size={20} color='black' />}
            onChange={handleSearch}
          />
          <div className='flex gap-2 items-center justify-center whitespace-nowrap px-4 py-2 rounded-lg border border-solid border-[#808080]'>
            <HiDotsVertical size={24} />
            Tổng trang
          </div>
          <div className='cursor-pointer flex gap-2 items-center justify-center whitespace-nowrap px-4 py-2 rounded-lg border border-solid border-[#808080]' onClick={onDownload}>
            <HiArrowUpTray size={24} />
            Xuất CSV
          </div>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={'default'}>
                <span>Chọn ngày</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0 -translate-x-[92px]'>
              <Calendar
                mode='range'
                selected={date}
                onSelect={handleSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div>
        <Tabs
          defaultValue='all'
          
          onChange={(e) =>
            setTab(
              (e.target as HTMLInputElement).value as
                | 'all'
                | 'success'
                | 'fail'
                | 'pending'
            )
          }
        >
          <TabsList className='gap-4 bg-white'>
            <TabsTrigger value='all' onClick={() => handleFilter("all")}>Tất cả</TabsTrigger>
            <TabsTrigger value='success' onClick={() => handleFilter("succes")}>Thành công</TabsTrigger>
            <TabsTrigger value='fail' onClick={() => handleFilter("fail")}>Thất bại</TabsTrigger>
            <TabsTrigger value='pending' onClick={() => handleFilter("pending")}>Đang xử lí</TabsTrigger>
          </TabsList>
          <Table className=' w-full' ref={tableRef}>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tên</TableHead>
                <TableHead>Số tiền</TableHead>
                <TableHead>Phương thức</TableHead>
                <TableHead>Ngày in</TableHead>
                <TableHead>Trạng thái</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {renderHisData.length === 0 ? (
                <TableRow>
                   <TableCell colSpan={12}>
                      
                    </TableCell>
              </TableRow>
              ) : (
                renderHisData.map((item,index) => (
                  <TableRow key={item.id} style={{
                    backgroundColor: index % 2 === 1 ? "#FAFCF3" : "#FFFFFF",}}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>
                    <Highlight
                        searchWords={[searchTerm]}
                        autoEscape={true}
                        textToHighlight={item.printer}
                        highlightClassName="highlight-yellow" // Áp dụng lớp CSS để tô sáng
                      />
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.method}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{Badget(item.status)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
          <div className='justify-self-end mt-5'>
            {renderHisData.length > 0 &&  <Pagination className='mr-10'>
              <PaginationContent>
                <PaginationItem>
                <PaginationLink className='p-2' style={{border:"1px solid #e6e6e6"}}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink className='p-2' style={{border:"1px solid #e6e6e6"}}>2</PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>}
          </div>
          {renderHisData.length == 0 &&  <div className='h-[350] w-full text-center flex  flex-col justify-center'>
              <div className='flex  justify-center'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
              </div>
              <h2 className='font-bold text-xl'>Vui lòng chọn thời gian!</h2>
          </div>}
         
        </Tabs>
      </div>
    </div>
  );
};

export default HistoryPage;
