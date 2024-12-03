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

const ReportPage = () => {
  const [date, setDate] = useState<DateRange>();
  const [, setTab] = useState<'all' | 'success' | 'fail' | 'pending'>('all');
  return (
    <div className='p-6'>
      <div className='flex justify-between mb-6'>
        <div className='h-10 flex gap-3'>
          <Input
            className='border-[#808080]'
            icon={<HiOutlineSearch size={20} color='black' />}
          />
          <div className='flex gap-2 items-center justify-center whitespace-nowrap px-4 py-2 rounded-lg border border-solid border-[#808080]'>
            <HiDotsVertical size={24} />
            Tổng trang
          </div>
          <div className='flex gap-2 items-center justify-center whitespace-nowrap px-4 py-2 rounded-lg border border-solid border-[#808080]'>
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
                onSelect={setDate}
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
          <TabsList className='gap-4'>
            <TabsTrigger value='all'>Tất cả</TabsTrigger>
            <TabsTrigger value='success'>Thành công</TabsTrigger>
            <TabsTrigger value='fail'>Thất bại</TabsTrigger>
            <TabsTrigger value='pending'>Đang xử lí</TabsTrigger>
          </TabsList>
          <Table className='mt-4 w-full border border-solid border-black mb-4'>
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
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>Nguyễn Văn A</TableCell>
                  <TableCell>100000</TableCell>
                  <TableCell>Thanh toán khi nhận hàng</TableCell>
                  <TableCell>2021-10-10</TableCell>
                  <TableCell>Thành công</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className='justify-self-end'>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href='#' />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#'>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#' isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href='#'>3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href='#' />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default ReportPage;
