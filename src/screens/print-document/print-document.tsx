import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { HiOutlineRefresh } from 'react-icons/hi';
import { HiChevronUp ,HiChevronDown} from 'react-icons/hi2';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "../layout.css"
import { useEffect } from 'react';
interface Printer {
  id: string;
  name: string;
  status: string;
  campus: string,
  size: []
}

const PrintDocumentPage = () => {
  const [, setTab] = useState<'all' | 'active' | 'inactive'>('all');

  const [printers, setPrinters] = useState<Printer[]>([]);
  const [currentPrinters, setCurrentPrinters] = useState<Printer[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPrinters, setFilteredPrinters] = useState<Printer[]>(printers);
  const itemsPerPage = 6; // Số lượng máy in mỗi trang

  // Fetch dữ liệu máy in khi component mount
  useEffect(() => {
    fetch('http://localhost:3002/printer')
      .then(response => response.json())
      .then(data => {
        setPrinters(data);
        setFilteredPrinters(data); // Thiết lập danh sách máy in ban đầu
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Cập nhật máy in hiển thị theo trang
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    setCurrentPrinters(filteredPrinters.slice(startIndex, endIndex));
  }, [currentPage, filteredPrinters]);

  // Hàm xử lý lọc máy in theo trạng thái
  const handleStatus = (status: string): void => {
    if (status === "all") {
      setFilteredPrinters(printers);
    } else {
      setFilteredPrinters(printers.filter(printer => printer.status === status));
    }
    setCurrentPage(1); // Reset trang về trang đầu khi thay đổi bộ lọc
  };

  // const handleCampus = (campus: string): void => {
  //   if (campus === "all") {
  //     setFilteredPrinters(printers);
  //   } else {
  //     setFilteredPrinters(printers.filter(printer => printer.campus === campus));
  //   }
  //   setCurrentPage(1); // Reset trang về trang đầu khi thay đổi bộ lọc
  // };
  const [selectedCampuses, setSelectedCampuses] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  // Xử lý khi checkbox thay đổi (cả campus và size)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;

    if (name === "campus") {
      // Cập nhật checkbox campus
      setSelectedCampuses((prev) => {
        if (checked) {
          return [...prev, value];
        } else {
          return prev.filter((campus) => campus !== value);
        }
      });
    } else if (name === "size") {
      // Cập nhật checkbox size
      setSelectedSizes((prev) => {
        if (checked) {
          return [...prev, value];
        } else {
          return prev.filter((size) => size !== value);
        }
      });
    }
  };

  // Xử lý khi nhấn nút "Áp dụng"
  const handleApply = () => {
    filterPrinters();

    const result = {
      campus: {
        name: "campus",
        value: selectedCampuses.map(Number), 
      },
      size: {
        name: "size",
        value: selectedSizes.map(Number), // Chuyển đổi các giá trị thành số
      },
    };
    console.log(result);
    // Ở đây bạn có thể làm gì đó với result (ví dụ: gửi lên server)
  };


  const filterPrinters = () => {
    let filtered = printers;

    // Lọc theo campus (nếu có)
    if (selectedCampuses.length > 0) {
      filtered = filtered.filter(printer =>
        selectedCampuses.includes(printer.campus)
      );
    }

    // Lọc theo size (nếu có)
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(printer =>
        printer.size.some(size => selectedSizes.includes(String(size)))
      );
    }

    // Cập nhật danh sách máy in đã lọc
    setFilteredPrinters(filtered);
  };


  const handleClear = () => {
    console.log(1)
    setSelectedCampuses([]); // Xóa trạng thái chọn campus
    setSelectedSizes([]); // Xóa trạng thái chọn size

    // Nếu muốn bỏ chọn checkbox ngay lập tức:
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      "input[type='checkbox']"
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  const [isOpen, setIsOpen] = useState(false); // Trạng thái điều khiển dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Đảo ngược trạng thái của dropdown
  };

  const [isOpen2, setIsOpen2] = useState(false); // Trạng thái điều khiển dropdown cho kích cỡ giấy

  const toggleDropdown2 = () => {
    setIsOpen2((prev) => !prev); // Đảo ngược trạng thái mở/đóng dropdown
  };

  return (
    <div className='flex gap-8 mt-5 bg-white'>
      <div className='w-56 p-6 flex flex-col gap-5'>
        <div className='flex justify-between'>
          <div className='text-[20px]/[34px] font-bold'>Lọc</div>
          <button className='size-8 flex justify-center items-center rounded-[5px] bg-black text-white'>
            <HiOutlineRefresh size={20} className='p-0' onClick={handleClear} />
          </button>
        </div>
        <div className="flex flex-col gap-3 justify-center pb-4 border-b border-solid border-[#eeeeee]">
      <div className="text-base font-bold flex justify-between items-center">
        Địa điểm máy in
        {/* Sử dụng biểu tượng khác nhau tùy vào trạng thái dropdown */}
        <div onClick={toggleDropdown}>
          {isOpen ? (
            <HiChevronUp size={24} />
          ) : (
            <HiChevronDown size={24} />
          )}
        </div>
      </div>

      {/* Điều khiển việc hiển thị các checkbox khi dropdown mở */}
      {isOpen && (
        <div className="text-sm flex flex-col gap-2">
          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="campus"
              value="1"
              onChange={handleCheckboxChange}
            />
            Cơ sở 1
          </div>

          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="campus"
              value="2"
              onChange={handleCheckboxChange}
            />
            Cơ sở 2
          </div>
        </div>
      )}
    </div>
    <div className="flex flex-col gap-3 justify-center pb-4 border-b border-solid border-[#eeeeee]">
      <div className="text-base font-bold flex justify-between items-center">
        Kích cỡ
        <div onClick={toggleDropdown2}>
          {isOpen2 ? (
            <HiChevronUp size={24} />
          ) : (
            <HiChevronDown size={24} />
          )}
        </div>
      </div>

      {/* Điều khiển việc hiển thị các checkbox khi dropdown mở */}
      {isOpen2 && (
        <div className="text-sm flex flex-col gap-2">
          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="size"
              value="1"
              onChange={handleCheckboxChange}
            />
            Giấy A1
          </div>

          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="size"
              value="2"
              onChange={handleCheckboxChange}
            />
            Giấy A2
          </div>

          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="size"
              value="3"
              onChange={handleCheckboxChange}
            />
            Giấy A3
          </div>

          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="size"
              value="4"
              onChange={handleCheckboxChange}
            />
            Giấy A4
          </div>

          <div className="text-sm flex items-center gap-2">
            <input
              type="checkbox"
              className="size-[18px] bg-gray-100"
              name="size"
              value="5"
              onChange={handleCheckboxChange}
            />
            Giấy A5
          </div>
        </div>
      )}
    </div>
        <Button   onClick={handleApply}  className='w-full' style={{background:"#8B9373"}}>Áp dụng</Button>
      </div>
      <div className='w-full p-2'>
        <Tabs
          defaultValue='all'
          onChange={(e) =>
            setTab(
              (e.target as HTMLInputElement).value as
                | 'all'
                | 'active'
                | 'inactive'
            )
          }
        >
              <TabsList className='bg-white'>
                <TabsTrigger value='all' onClick={() => handleStatus("all")}>Tất cả</TabsTrigger>
                <TabsTrigger value='active' onClick={() => handleStatus("active")}>Hoạt động</TabsTrigger>
                <TabsTrigger value='inactive'onClick={() => handleStatus("inactive")} >Ngừng hoạt động</TabsTrigger>
              </TabsList>
          <Table className='w-full'>
              <TableHeader>
              <TableRow style={{background:"#FAFCF3"}}>
                <TableHead>ID</TableHead>
                <TableHead>Tên máy</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
            {currentPrinters.map((printer, index) => (
                <TableRow
                  key={printer.id}
                  style={{
                    backgroundColor: index % 2 === 1 ? "#FAFCF3" : "#FFFFFF",
                  }}
                >
                  <TableCell>{printer.id}</TableCell>
                  <TableCell>{printer.name}</TableCell>
                  <TableCell>{printer.status == "inactive" ? 
                  <>
                    <span className="bg-gray-100 text-red-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Không hoạt động</span>
                  </>
                  :                   
                    <span className="bg-green-100 text-green-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Hoạt động</span>
                  }
                </TableCell>
                  <TableCell>
                    <Link to={`/print-document/${printer.id}`}>
                      <Button
                        className="px-6 py-1 bg-white text-gray-500 font-bold"
                        style={{
                          border: "1px solid #e6e6e6",
                          borderRadius: "40px",
                        }}
                      >
                        Chọn
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='justify-self-end mt-5'>
            <Pagination className='mr-10'>
              <PaginationContent>
                <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(1)} className='p-2' style={{border:"1px solid #e6e6e6"}}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(2)} className='p-2' style={{border:"1px solid #e6e6e6"}}>2</PaginationLink>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default PrintDocumentPage;
