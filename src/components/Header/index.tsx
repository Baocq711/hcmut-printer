import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';
import './Header.css';

interface HeaderProps {
  property1?: string;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  property1 = 'default',
  className = '',
  ...props
}) => {
  const variantsClassName = `property-1-${property1}`;
  const location = useLocation(); // Get current URL location

  // Define the title based on the current URL
  const getTitle = () => {
    console.log(location.pathname);
    switch (location.pathname) {
      case '/':
        return 'Bảng điều khiển';
      case '/print-document':
        return 'In ấn tài liệu';
      case '/history':
        return 'Lịch sử in ấn';
      default:
        return 'Bảng điều khiển'; // Default title
    }
  };

  return (
    <div
      className={`header-property-1-default ${className} ${variantsClassName} shadow-[0_8px_24px_rgba(149,157,165,0.2)]`}
      {...props}
    >
      {/* Search Section */}
      <div className='frame-119'>
        <div className='frame-17'>
          <div className='frame-16'>
            <MagnifyingGlassIcon
              className='solar-magnifer-outline'
              aria-label='Search icon'
            />
            <div className='t-m-ki-m'>Tìm kiếm...</div>
          </div>
        </div>

        {/* Notification Section */}
        <div className='group-4'>
          <div className='rectangle-2'></div>
          <div className='solar-bell-linear'>
            <BellIcon className='group' aria-label='Notification icon' />
          </div>
          <div className='ellipse-4'></div>
        </div>

        {/* User Avatar */}
        <img className='rectangle-3' src='/avatar.png' alt='User avatar' />
      </div>

      {/* Dashboard Title */}
      <div className='b-ng-i-u-khi-n'>{getTitle()}</div>
    </div>
  );
};
