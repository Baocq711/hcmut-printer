import Header from '@/components/layout/header';
import RootSidebar from '@/components/layout/sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full"> {/* Full width and height */}
        {/* Sidebar */}
        <RootSidebar />

        {/* Main content, takes up remaining width and height */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header />

          {/* Main content */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
