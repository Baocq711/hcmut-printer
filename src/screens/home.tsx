import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Modal from '@/components/ui/modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { isNumber } from 'class-validator';
import { notification } from 'antd';

// Hạnh
import '../assets/Css/Dashboard.css';
import LineChart from '../components/LineChart';
import Grid from '@mui/material/Grid';
import TwoBox from '../components/TwoBox';
import SpendingStatus from '../components/SpendingStatus';
import PaymentCard from '../components/PaymentCard';
import RecentTransaction from '../components/RecentTransaction';
import Box from '@mui/material/Box';

// import LineChart from "../components/LineChart"

const PriceOfPaper: { [key: string]: number } = {
  A1: 4000,
  A2: 2000,
  A3: 1000,
  A4: 500,
  A5: 250,
};

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const HomePage = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isOpenCheck, setIsOpenCheck] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState('');
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'In thành công',
      description: 'In thành công, vui lòng đến quầy thanh toán',
    });
  };

  return (
    <>
      <div>
        {contextHolder}

        {/* <Button variant='default' onClick={() => setIsOpenAdd(!isOpenAdd)}>
        Mua giấy in
      </Button> */}
        <Modal
          isOpen={isOpenAdd}
          title='Mua thêm trang in'
          onClose={() => {
            setIsOpenAdd(!isOpenAdd);
            setNumberOfPages(0);
            setSelectedPaper('');
          }}
        >
          <div className='flex justify-between gap-6'>
            <div className='w-full flex flex-col gap-2 mb-10'>
              <div className='text-[20px]/[34px] font-semibold'>Loại giấy</div>
              <Select
                onValueChange={(e) => setSelectedPaper(e)}
                value={selectedPaper}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Chọn loại giấy' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='A1'>A1</SelectItem>
                  <SelectItem value='A2'>A2</SelectItem>
                  <SelectItem value='A3'>A3</SelectItem>
                  <SelectItem value='A4'>A4</SelectItem>
                  <SelectItem value='A5'>A5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='w-full flex flex-col gap-2 h-[106px]'>
              <div className='text-[20px]/[34px] font-semibold'>Số trang</div>
              <Input
                onChange={(e) =>
                  setNumberOfPages(
                    isNumber(Number(e.target.value))
                      ? Number(e.target.value)
                      : 0
                  )
                }
                value={numberOfPages}
              />
            </div>
          </div>
          <div className='flex justify-between gap-6'>
            <Button
              className='w-full'
              variant={'outline'}
              onClick={() => {
                setIsOpenAdd(!isOpenAdd);
                setNumberOfPages(0);
                setSelectedPaper('');
              }}
            >
              Thoát
            </Button>
            <Button
              className='w-full'
              onClick={() => {
                if (selectedPaper && numberOfPages !== 0) {
                  setIsOpenAdd(!isOpenAdd);
                  setIsOpenCheck(!isOpenCheck);
                }
              }}
            >
              Mua
            </Button>
          </div>
        </Modal>
        <Modal
          isOpen={isOpenCheck}
          title='Xác nhận in'
          onClose={() => {
            setIsOpenCheck(!isOpenCheck);
            setNumberOfPages(0);
            setSelectedPaper('');
          }}
        >
          <div className='flex flex-col gap-6 mb-10'>
            <div className='text-2xl'>Loại giấy: {selectedPaper}</div>
            <div className='text-2xl'>Số trang: {numberOfPages}</div>
            <div className='text-2xl font-bold'>
              Tổng tiền:{' '}
              {new Intl.NumberFormat('vi-VN').format(
                PriceOfPaper[selectedPaper] * numberOfPages
              ) + ' VNĐ'}
            </div>
          </div>
          <div className='flex gap-6'>
            <Button
              className='w-full'
              variant={'outline'}
              onClick={() => {
                setIsOpenAdd(!isOpenAdd);
                setIsOpenCheck(!isOpenCheck);
              }}
            >
              Quay lại
            </Button>
            <Button
              className='w-full'
              onClick={() => {
                setIsOpenCheck(!isOpenCheck);
                openNotificationWithIcon('success');
                //do any thing

                setNumberOfPages(0);
                setSelectedPaper('');
              }}
            >
              Xác nhận
            </Button>
          </div>
        </Modal>
      </div>
      <div className='flex-grow h-full bg-white grid grid-cols-5 gap-4'>
        {/* Col 1 - 60% (3/5) */}
        <div className='col-span-3 p-4 h-screen flex flex-col'>
          <LineChart />
          <TwoBox setOpen={setIsOpenAdd} isOpen={isOpenAdd} />
          <SpendingStatus />
        </div>

        {/* Col 2 - 40% (2/5) */}
        <div className='col-span-2 p-4 h-full flex flex-col pl-5 pr-40'>
          <PaymentCard />
          <RecentTransaction />
        </div>
      </div>
    </>
  );
};

export default HomePage;
