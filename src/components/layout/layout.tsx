import Header from '@/components/layout/header';
import RootSidebar from '@/components/layout/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <SidebarProvider>
      <RootSidebar />
      <div className='w-full'>
        <Header />
        <main className='mt-8 ml-8 pr-28'>
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
