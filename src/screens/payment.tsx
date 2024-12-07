import banner from '@/assets/banner.png';
import { HiOutlineLogout } from 'react-icons/hi';
import { Button } from 'antd';
import ListPayment from '@/components/ListPayment/ListPayment';
import { useState } from 'react';

const list = [
  {
    semester: 241,
    content: {
      contents: 'Học phí đại học chính quy học kỳ 241',
      paymentPeriod: 'DDDH241.11',
      taymentType: 'Học phí ĐH chính quy',
      expectedCollectionDate: '2024-11-09 00:00:00',
      amount: 16218000,
      provisionalCollection: 0,
      paid: 16218000,
      remaining: 0,
    },
    shortContent: {
      no: 1,
      shortContent: 'Học phí đại học chính quy học kỳ 241',
      payment: 'DDDH241.11.2210195.1',
      amount: 16218000,
      paid: 16218000,
      paymentDate: '2024-11-14 22:50:36.0',
      remaining: 0,
      expectedExpiryDate: '2024-11-18 15:00:00',
    },
  },
  {
    semester: 232,
    content: {
      contents: 'Học phí đại học chính quy học kỳ 232',
      paymentPeriod: 'DDDH232.11',
      taymentType: 'Học phí ĐH chính quy',
      expectedCollectionDate: '2024-11-09 00:00:00',
      amount: 14000000,
      provisionalCollection: 0,
      paid: 14000000,
      remaining: 0,
    },
    shortContent: {
      no: 1,
      shortContent: 'Học phí đại học chính quy học kỳ 232',
      payment: 'DDDH241.11.2210195.1',
      amount: 14000000,
      paid: 14000000,
      paymentDate: '2024-11-14 22:50:36.0',
      remaining: 0,
      expectedExpiryDate: '2024-11-18 15:00:00',
    },
  },
];

const PaymentPage = () => {
  const [isPay, setIsPay] = useState<number>(0);

  return (
    <>
      <div className='min-h-[calc(100vh+1px)]'>
        <div
          className='bg-repeat bg-center h-[230px]'
          style={{ backgroundImage: `url(${banner})` }}
        ></div>
        <div className='w-screen max-w-[968px] mx-auto h-96 -translate-y-11 text-xs'>
          <div className='flex w-full justify-between items-center'>
            <div className='ml-3 h-11 w-20 flex items-center justify-center bg-white rounded-t-xl uppercase font-bold'>
              HOME
            </div>
            <div className='h-8 px-5 py-3 rounded-md bg-black text-white flex justify-center items-center gap-3'>
              <div>Xin chào Châu Quốc Bảo</div>
              <div className='border-r border-solid border-white h-3'></div>
              <div>Hướng dẫn sử dụng</div>
              <div className='border-r border-solid border-white h-3'></div>
              <HiOutlineLogout size={16} />
            </div>
          </div>
          <div className='px-5 py-10 rounded-md relative border-x-4 border-b-4 border-solid border-[#d9d9d9]'>
            <div className='absolute left-1/2 -translate-x-1/2'>
              <div className='flex justify-center items-center gap-1'>
                <p>Mã học kỳ</p>
                <input
                  type='text'
                  className='border border-solid border-black px-2 py-1 rounded focus:outline-none '
                />
              </div>
              <div className='flex justify-center gap-2 mt-2'>
                <Button>Tìm kiếm</Button>
                <Button>Xóa tìm kiếm</Button>
              </div>
            </div>
            <Button
              className='absolute right-52 top-[74px]'
              style={isPay === 0 ? { display: 'none' } : {}}
            >
              Thanh toán ngay
            </Button>

            <div className='flex flex-col gap-3 mb-6'>
              <div>Thông tin cá nhân</div>
              <div>Học bổng</div>
              <div>Phí / Học Phí</div>
            </div>
            <div className='border-bottom-black border-b-2'>
              Phí / Học phí của sinh viên
            </div>

            {list.map((item, index) => (
              <ListPayment
                key={'list' + index}
                semester={item.semester}
                content={item.content}
                shortContent={item.shortContent}
                setIsPay={setIsPay}
                isPay={isPay}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='h-52'></div>
    </>
  );
};

export default PaymentPage;
