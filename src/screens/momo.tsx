import Header from '@/components/Momo/Header';
import bkulogo from '@/assets/bkulogo.png';
import qrcode from '@/assets/qrcode.png';
import { HiQrcode } from 'react-icons/hi';

const MomoPage = () => {
  return (
    <div>
      <Header />
      <main className='w-screen max-w-[1040px] mx-auto flex gap-8 pt-8'>
        <div className='w-80 px-8 border border-solid border-black'>
          <div className='mb-7 mt-6 text-xl'>Thông tin đơn hàng</div>
          <div>
            <div className='mb-2'>Nhà cung cấp</div>
            <img
              src={bkulogo}
              alt=''
              className='mx-auto h-[170px] aspect-[7/5] mb-3'
            />
            <div className='font-bold pb-5 border-bottom-black flex justify-center'>
              HCMUT Printer
            </div>
          </div>
          <div className='mt-5 flex flex-col gap-2 pb-4 border-bottom-black'>
            <div>Mã đơn hàng</div>
            <div className='whitespace-nowrap text-ellipsis overflow-hidden'>
              32941b98afad46a0a6fa626e12ec3029
            </div>
          </div>
          <div className='mt-5 flex flex-col gap-2 pb-4 border-bottom-black'>
            <div>Mô tả</div>
            <div className='whitespace-nowrap text-ellipsis overflow-hidden'>
              Thanh toán đơn hàng 152053497
            </div>
          </div>
          <div className='mt-5 flex flex-col gap-2 pb-4'>
            <div>Số tiền</div>
            <div className='text-4xl'>100.000đ</div>
          </div>
        </div>
        <div className='mx-auto w-[600px] h-[576px] bg-[#d82d8b] text-white flex flex-col items-center rounded-lg'>
          <div className='mt-8 text-xl'>Quét mã QR để thanh toán</div>
          <div className='p-4 bg-white rounded-[15px] mt-12'>
            <img src={qrcode} alt='' width={280} height={280} />
          </div>
          <div className='flex justify-center items-center gap-1 mt-6'>
            <HiQrcode size={24} />
            Sử dụng App MoMo hoặc ứng dụng
          </div>
          <div>camera hỗ trợ QR code để quét mã</div>
          <div className='mt-4 mb-12'>
            Gặp khó khăn khi thanh toán? Xem Hướng dẫn
          </div>
        </div>
      </main>
      <footer className='h-10'></footer>
    </div>
  );
};

export default MomoPage;
