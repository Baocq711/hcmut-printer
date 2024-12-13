import banner from '@/assets/banner.png';
import { HiOutlineLogout } from 'react-icons/hi';
import { Button } from 'antd';
import ListPayment from '@/components/ListPayment/ListPayment';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PaymentContent {
  contents: string;
  paymentPeriod: string;
  paymentType: string;
  expectedCollectionDate: string;
  amount: number;
  provisionalCollection: number;
  paid: number;
  remaining: number;
}

interface ShortContent {
  no: number;
  shortContent: string;
  payment: string;
  amount: number;
  paid: number;
  paymentDate: string;
  remaining: number;
  expectedExpiryDate: string;
}

interface Payment {
  semester: number;
  content: PaymentContent;
  shortContent: ShortContent;
}

const PaymentPage = () => {
  const navigate = useNavigate();
  const [isPay, setIsPay] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await fetch('http://localhost:3002/payments');
      if (!response.ok) {
        throw new Error('Failed to fetch payments');
      }
      const data = await response.json();
      const sortedPayments = data.sort((a: Payment, b: Payment) => {
        const dateA = new Date(a.content.expectedCollectionDate);
        const dateB = new Date(b.content.expectedCollectionDate);
        return dateB.getTime() - dateA.getTime();
      });
      setPayments(sortedPayments);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  // Function to add a new payment from transaction
  const addNewPayment = async (transaction: any) => {
    try {
      const newPayment = {
        semester: new Date().getFullYear(),
        content: {
          contents: `Thanh toán in ấn ${transaction.printer}`,
          paymentPeriod: `IN${transaction.id}`,
          paymentType: 'Phí in ấn',
          expectedCollectionDate: new Date().toISOString(),
          amount: parseFloat(transaction.price.replace('.000', '')),
          provisionalCollection: 0,
          paid: 0,
          remaining: parseFloat(transaction.price.replace('.000', '')),
        },
        shortContent: {
          no: payments.length + 1,
          shortContent: `Thanh toán in ấn ${transaction.printer}`,
          payment: transaction.id,
          amount: parseFloat(transaction.price.replace('.000', '')),
          paid: 0,
          paymentDate: new Date().toISOString(),
          remaining: parseFloat(transaction.price.replace('.000', '')),
          expectedExpiryDate: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
          ).toISOString(), // 7 days from now
        },
      };

      const response = await fetch('http://localhost:3002/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPayment),
      });

      if (!response.ok) {
        throw new Error('Failed to add payment');
      }

      // Refresh payments list
      fetchPayments();
    } catch (error) {
      console.error('Error adding payment:', error);
    }
  };

  const handlePayNow = () => {
    if (selectedPayment) {
      // Navigate to momo page with the payment amount
      navigate('/momo', {
        state: { amount: selectedPayment.content.remaining },
      });
    }
  };

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
              onClick={handlePayNow}
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

            {payments.map((item, index) => (
              <ListPayment
                key={'list' + index}
                semester={item.semester}
                content={item.content}
                shortContent={item.shortContent}
                setIsPay={setIsPay}
                isPay={isPay}
                onSelect={() => setSelectedPayment(item)}
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
