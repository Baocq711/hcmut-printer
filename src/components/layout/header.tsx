import { HiOutlineBell, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import avatar from "../../assets/avatar.png"
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom
import SearchBar from '../SearchBar';

const Header = () => {

  const location = useLocation(); // Get current URL location

  // Define the title based on the current URL
  const getTitle = () => {
    console.log(location.pathname)
    switch (location.pathname) {
      case "/":
        return "Bảng điều khiển";
      case "/print-document":
        return "In ấn tài liệu";
      case "/history":
        return "Lịch sử in ấn";
      case "/report":
        return "Báo cáo chỉ tiêu";
      case "/printer":
        return "Máy in";
      default:
        return "Bảng điều khiển"; // Default title
    }
  };



  return (
    <div className='h-[60px] w-full pl-8 pr-28 flex items-center justify-between bg-white'>
      <div className='text-2xl font-bold' style={{color:"#000"}}>{getTitle()}</div>
      <div className='flex items-center gap-6'>
        <div className='h-4 w-60 p-3 flex items-center gap-2 mt-5'>
          {/* <div className='size-5'>
            <HiOutlineMagnifyingGlass size={20} color='#8B9373' />
          </div> */}
          <SearchBar />
        </div>
        <div className='size-12 flex items-center justify-center bg-[#fafafa]'>
          <HiOutlineBell size={24} color='#8B9373' />
        </div>
        <img src={avatar} alt='Ảnh nhân vật' />
      </div>
    </div>
  );
};

export default Header;
