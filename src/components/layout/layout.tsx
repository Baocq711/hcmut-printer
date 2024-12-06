import Header from '@/components/layout/header';
import RootSidebar from '@/components/layout/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full bg-white'>
        {' '}
        {/* Full width and height */}
        {/* Sidebar */}
        <RootSidebar />
        {/* Main content, takes up remaining width and height */}
        <div className='flex-1 flex flex-col'>
          {/* Header */}
          <div className='shadow-[0_8px_24px_rgba(149,157,165,0.2)]'>
            <Header />
          </div>

          {/* Main content */}
          <main className='flex-1 gap-2'>
            <div className='pl-4 pt-10'>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
