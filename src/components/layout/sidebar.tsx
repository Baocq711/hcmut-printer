import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from '@/components/ui/sidebar';
import {
  HiArrowRightStartOnRectangle,
  HiOutlineChartPie,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCog6Tooth,
  HiOutlineDocumentCheck,
  HiOutlinePrinter,
  HiOutlineUserCircle,
  HiPrinter,
} from 'react-icons/hi2';
import { Link, useLocation } from 'react-router-dom';

const RootSidebar = () => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
  return (
    <Sidebar className='px-5'>
      <SidebarHeader className='flex justify-center items-center h-28 text-2xl'>
        <span className='flex justify-center items-center gap-2'>
          <HiPrinter />
          HCMUT SSPS
        </span>
      </SidebarHeader>
      <SidebarContent className='no-scrollbar'>
        <SidebarGroup className='p-0 flex flex-col gap-3'>
          <SidebarGroupLabel className='text-base px-10 h-11'>
            Tính năng
          </SidebarGroupLabel>
          <SidebarGroupContent
            className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11 flex items-center gap-2'
            style={
              path === '' ? { backgroundColor: '#8B9373', color: 'white' } : {}
            }
          >
            <Link to={'../'} className='flex items-center gap-2'>
              <HiOutlineChartPie size={24} />
              Bảng điều khiển
            </Link>
          </SidebarGroupContent>
          <SidebarGroupContent
            className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11'
            style={
              path === 'print-document'
                ? { backgroundColor: '#8B9373', color: 'white' }
                : {}
            }
          >
            <Link to={'../print-document'} className='flex items-center gap-2'>
              <HiOutlineDocumentCheck size={24} />
              In ấn tài liệu
            </Link>
          </SidebarGroupContent>
          <SidebarGroupContent
            className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11'
            style={
              path === 'history'
                ? { backgroundColor: '#8B9373', color: 'white' }
                : {}
            }
          >
            <Link to={'../history'} className='flex items-center gap-2'>
              <HiOutlineClock size={24} />
              Lịch sử in ấn
            </Link>
          </SidebarGroupContent>
          <SidebarGroupContent
            className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11'
            style={
              path === 'report'
                ? { backgroundColor: '#8B9373', color: 'white' }
                : {}
            }
          >
            <Link to={'../report'} className='flex items-center'>
              <HiOutlineClipboardDocumentList size={24} />
              Báo cáo chi tiêu
            </Link>
          </SidebarGroupContent>
          {/* <SidebarGroupContent
            className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11'
            style={
              path === 'printer'
                ? { backgroundColor: '#8B9373', color: 'white' }
                : {}
            }
          >
            <Link to={'../printer'} className='flex items-center gap-2'>
              <HiOutlinePrinter size={24} />
              Máy in
            </Link>
          </SidebarGroupContent> */}
        </SidebarGroup>
        <SidebarGroup className='p-0 flex flex-col gap-3'>
          <SidebarGroupLabel className='text-base px-10 h-11'>
            Hỗ trợ
          </SidebarGroupLabel>
          <SidebarGroupContent className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11 flex items-center gap-2'>
            <Link to={'../account'} className='flex items-center'>
              <HiOutlineUserCircle size={24} />
              Tài khoản
            </Link>
          </SidebarGroupContent>
          <SidebarGroupContent className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11 flex items-center gap-2'>
            <HiOutlineCog6Tooth size={24} />
            Cài đặt
          </SidebarGroupContent>
          <SidebarGroupContent className='text-base font-bold rounded-[10px] px-10 py-[10px] h-11 flex items-center gap-2'>
            <Link to={'../login'} className='flex items-center'>
            <HiArrowRightStartOnRectangle size={24} />
              Thoát
            </Link>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent className='px-6 mt-14 h-80  rounded-lg flex flex-col justify-center items-center gap-8' style={{background:"#8B9373"}}>
            <span className='text-white text-2xl'>
              Kiểm tra hoạt động in ấn của bạn mọi lúc mọi nơi!
            </span>
            <Button className='w-full bg-white text-black hover:bg-white text-base'>
              Kiểm tra
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default RootSidebar;
