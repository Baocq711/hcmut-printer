import momoLogo from '@/assets/momo.png';

const Header = () => {
  return (
    <div className='h-[70px] flex items-center shadow-md'>
      <img
        src={momoLogo}
        alt=''
        width={46}
        height={46}
        className='ml-[200px] mr-4'
      />
      Cổng thanh toán Momo
    </div>
  );
};

export default Header;
