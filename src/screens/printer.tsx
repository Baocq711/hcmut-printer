import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { HiOutlineRefresh } from 'react-icons/hi';
import { HiChevronUp } from 'react-icons/hi2';
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

const PrinterPage = () => {
  const [, setTab] = useState<'all' | 'active' | 'inactive'>('all');

  return (
    <div className='flex gap-8'>
      <div className='w-56 p-6 flex flex-col gap-5'>
        <div className='flex justify-between'>
          <div className='text-[20px]/[34px]'>Lọc</div>
          <button className='size-8 flex justify-center items-center rounded-[5px] bg-black text-white'>
            <HiOutlineRefresh size={20} className='p-0' />
          </button>
        </div>
        <div className='flex flex-col gap-3 justify-center pb-4 border-b border-solid border-[#eeeeee]'>
          <div className='text-base font-bold flex justify-between items-center'>
            Địa điểm máy in <HiChevronUp size={24} />
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            Cơ sở 1
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            Cơ sở 2
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-center pb-4 border-b border-solid border-[#eeeeee]'>
          <div className='text-base font-bold flex justify-between items-center'>
            Trạng thái <HiChevronUp size={24} />
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            Hoạt động
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            Ngưng hoạt động
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-center pb-4 border-b border-solid border-[#eeeeee]'>
          <div className='text-base font-bold flex justify-between items-center'>
            Kích cỡ <HiChevronUp size={24} />
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            A1
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            A2
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            A3
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            A4
          </div>
          <div className='text-sm flex items-center gap-2'>
            <Checkbox className='size-[18px]' />
            A5
          </div>
        </div>
        <Button className='w-full'>Áp dụng</Button>
      </div>
      <div className='w-full'>
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
          <TabsList className='gap-4'>
            <TabsTrigger value='all'>Tất cả</TabsTrigger>
            <TabsTrigger value='active'>Hoạt động</TabsTrigger>
            <TabsTrigger value='inactive'>Ngừng hoạt động</TabsTrigger>
          </TabsList>
          <Table className='mt-4 w-full border border-solid border-black mb-4'>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Tên máy</TableHead>
                <TableHead>Trạng thái</TableHead>
                <TableHead>Hành động</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>Nguyễn Văn A</TableCell>
                  <TableCell>Thành công</TableCell>
                  <TableCell>Chọn</TableCell>
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

export default PrinterPage;
