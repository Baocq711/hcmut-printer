import { HiOutlineBell, HiOutlineMagnifyingGlass } from 'react-icons/hi2';

const Header = () => {
  return (
    <div className='h-[60px] w-full pl-8 pr-28 flex items-center justify-between shadow-[rgba(149,157,165,0.2)_0px_8px_24px]'>
      <div className='text-2xl font-bold'>Bảng điều khiển</div>
      <div className='flex items-center gap-6'>
        <div className='h-12 w-60 p-3 flex items-center gap-2 bg-[#fafafa]'>
          <div className='size-5'>
            <HiOutlineMagnifyingGlass size={20} color='#808080' />
          </div>
          <input
            type='text'
            placeholder='Search...'
            className='text-base outline-none'
          />
        </div>
        <div className='size-12 flex items-center justify-center bg-[#fafafa]'>
          <HiOutlineBell size={24} color='#808080' />
        </div>
        <div className='size-12 bg-black rounded-sm'></div>
      </div>
    </div>
  );
};

export default Header;
