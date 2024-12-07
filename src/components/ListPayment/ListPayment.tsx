import { Checkbox } from 'antd';
import { HiMinusSm, HiOutlinePrinter } from 'react-icons/hi';
import { PiMinusSquareThin } from 'react-icons/pi';
import { TbBorderCornerSquare } from 'react-icons/tb';

interface ListPaymentProps {
  semester: number;
  content: {
    contents: string;
    paymentPeriod: string;
    taymentType: string;
    expectedCollectionDate: string;
    amount: number;
    provisionalCollection: number;
    paid: number;
    remaining: number;
  };
  shortContent: {
    no: number;
    shortContent: string;
    payment: string;
    amount: number;
    paid: number;
    paymentDate: string;
    remaining: number;
    expectedExpiryDate: string;
  };
  setIsPay: (isPay: number) => void;
  isPay: number;
}

const ListPayment = ({
  semester,
  content,
  shortContent,
  setIsPay,
  isPay,
}: ListPaymentProps) => {
  return (
    <>
      <div className='h-6 px-8 grid grid-cols-[repeat(8,_minmax(0,_1fr))_12px] border-bottom-black'>
        <p className='flex items-center h-full'>Nội dung</p>
        <p className='flex items-center h-full'>Đợt thanh toán</p>
        <p className='flex items-center h-full'>Loại thanh toán</p>
        <p className='flex items-center h-full'>Ngày dự kiến thu</p>
        <p className='flex items-center h-full'>Số tiền</p>
        <p className='flex items-center h-full'>Tạm thu</p>
        <p className='flex items-center h-full'>Đã thanh toán</p>
        <p className='flex items-center h-full'>Còn lại</p>
      </div>
      <div className='h-8 font-bold uppercase flex items-center gap-1 border-bottom-black'>
        <PiMinusSquareThin />
        học kỳ {semester}
      </div>

      <div className='min-h-[56px] pr-8 grid grid-cols-[32px_repeat(8,_minmax(0,_1fr))_12px] border-bottom-black'>
        <div className='h-full w-full flex items-center'>
          <HiMinusSm size={20} />
        </div>

        <p className='flex items-center h-full'>{content.contents}</p>
        <p className='flex items-center h-full'>{content.paymentPeriod}</p>
        <p className='flex items-center h-full'>{content.taymentType}</p>
        <p className='flex items-center h-full'>
          {content.expectedCollectionDate}
        </p>
        <p className='flex items-center h-full'>{content.amount}</p>
        <p className='flex items-center h-full'>
          {content.provisionalCollection}
        </p>
        <p className='flex items-center h-full'>{content.paid}</p>
        <p className='flex items-center h-full'>{content.remaining}</p>
        <Checkbox
          onChange={(e) =>
            e.target.checked ? setIsPay(isPay + 1) : setIsPay(isPay - 1)
          }
        />
      </div>
      <div className='grid grid-cols-[32px_1fr] min-h-16 border-bottom-black'>
        <div className='flex justify-center items-center h-full w-full'>
          <div className='transform -rotate-90 size-3'>
            <TbBorderCornerSquare size={12} />
          </div>
        </div>
        <div>
          <div className='grid grid-cols-[28px_152px_112px_64px_84px_112px_78px_128px_104px_24px] border-bottom-black border-dashed min-h-9'>
            <p className='flex items-center h-full'>STT</p>
            <p className='flex items-center h-full'>Nội dung ngắn</p>
            <p className='flex items-center h-full'>Khoản thanh toán</p>
            <p className='flex items-center h-full'>Số tiền</p>
            <p className='flex items-center h-full'>Đã thanh toán</p>
            <p className='flex items-center h-full'>Ngày thanh toán</p>
            <p className='flex items-center h-full'>Còn lại</p>
            <p className='flex items-center h-full'>Ngày dự kiến hết hạn</p>
            <p className='flex items-center h-full'>Chọn thanh toán</p>
            <p className='flex items-center h-full'>In</p>
          </div>
          <div className='grid grid-cols-[28px_152px_112px_64px_84px_112px_78px_128px_104px_24px]'>
            <p className='flex items-center h-full'>{shortContent.no}</p>
            <p className='flex items-center h-full'>
              {shortContent.shortContent}{' '}
            </p>
            <p className='flex items-center h-full overflow-hidden w-[calc(100%-12px)]'>
              {shortContent.payment}{' '}
            </p>
            <p className='flex items-center h-full'>{shortContent.amount}</p>
            <p className='flex items-center h-full'>{shortContent.paid}</p>
            <p className='flex items-center h-full'>
              {shortContent.paymentDate}
            </p>
            <p className='flex items-center h-full'>{shortContent.remaining}</p>
            <p className='flex items-center h-full'>
              {shortContent.expectedExpiryDate}
            </p>
            <p className='flex items-center h-full'> </p>
            <p className='flex items-center justify-center size-6 my-auto rounded bg-orange-500'>
              <HiOutlinePrinter size={22} color='white' />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPayment;
