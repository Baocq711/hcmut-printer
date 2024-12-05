import image from '@/assets/44.png';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PiPackage } from 'react-icons/pi';
import { useState } from 'react';
import InputSelect from '@/components/ui/input-select';
import { Input } from '@/components/ui/input';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const PrintDocumentIdPage = () => {
  const [rangePrintOpen, setPrintRangeOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState<string | null>(null);
  const [typePaperOpen, setTypePaperOpen] = useState(false);
  const [typePaperValue, setTypePaperValue] = useState<string | null>(null);
  const [isBindOpen, setIsBindOpen] = useState(false);
  const [isBindValue, setIsBindValue] = useState<boolean | null>(null);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: 'In thành công',
      description: 'In thành công, vui lòng đến quầy thanh toán',
    });
  };

  return (
    <div className='grid grid-cols-[498px_auto] gap-8 mt-1'>
      {contextHolder}
      <div className='w-full px-6 flex flex-col gap-6'>
        <div>
          <img
            src={image}
            alt=''
            width={500}
            height={500}
            className='rounded-lg'
          />
        </div>
        <div className='flex gap-6'>
          <img
            src={image}
            alt=''
            width={134}
            height={134}
            className='rounded-lg'
          />
          <img
            src={image}
            alt=''
            width={134}
            height={134}
            className='rounded-lg'
          />
          <img
            src={image}
            alt=''
            width={134}
            height={134}
            className='rounded-lg'
          />
        </div>
      </div>
      <div className='w-full px-6 flex flex-col pb-10 pt-1'>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex items-center gap-2'>
              <div className='size-[35px] bg-black bg-opacity-10 flex items-center justify-center rounded-[10px]'>
                <PiPackage size={24} className='translate-x-[0.5px]' style={{color:"#8B9373"}} />
              </div>
              Giờ nhận tài liệu
            </div>
            <div>
              <div className='text-3xl font-bold'>T2 - T7</div>
              <div className='text-3xl font-bold'>8:00 - 16:00</div>
            </div>
          </div>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex items-center gap-2'>
              <div className='size-[35px] bg-black bg-opacity-10 flex items-center justify-center rounded-[10px]'>
                <HiOutlineShoppingCart size={24} style={{color:"#F4A754"}} />
              </div>
              Địa điểm
            </div>
            <div>
              <div className='text-3xl font-bold'>Phòng 103</div>
              <div className='text-3xl font-bold'>Tòa BK.B6</div>
            </div>
          </div>
        </div>
        <div className='pt-6 flex flex-col gap-6 h-full'>
          <div className='flex gap-6'>
            <div className='text-3xl w-full'>{'HP 107a (4ZB77A)'}</div>
            <div className='text-3xl w-full' style={{color:"#8B9373"}}>P909</div>
          </div>
          <div className='flex flex-col gap-4 mr-16'>
            <div>Mô tả</div>
            <div>
              <div>
                Máy in laser trắng đen, chỉ in 1 mặt, hỗ trợ kích thước giấy
              </div>
              <div>
                Phong bì C5, khay chứa giấy đã in 100 tờ và khay nạp giấy 150
                tờ, kết nối qua cổng USB 2.0 và tương thích với Windows 8.1.
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div>Thông tin thêm</div>
            <div className='flex flex-col gap-3'>
              <div>A1: 10 * 17 cm</div>
              <div>A2: 10 * 19 cm</div>
              <div>A3: 10 * 21 cm</div>
              <div>A4: 10 * 23 cm</div>
              <div>A5: 10 * 25 cm</div>
            </div>
          </div>
          <div className='flex-grow'></div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className='mr-16' style={{background:"#8B9373"}}>Tải file in</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tải file in</AlertDialogTitle>
                <AlertDialogDescription className='flex flex-col gap-6'>
                  <div className='flex flex-col gap-6'>
                    <div>
                      <div className='font-bold text-xl'>Phạm vi in</div>
                      <InputSelect
                        isOpen={rangePrintOpen}
                        setIsOpen={setPrintRangeOpen}
                        value={typePaperValue}
                        setValue={setTypePaperValue}
                        placeHolder='Chọn phạm vi in'
                        options={[
                          { label: 'Tất cả', value: 'all' },
                          // { label: 'Chọn trang', value: 'select' },
                        ]}
                      />
                    </div>
                    <div className='flex gap-6 w-full'>
                      <div className='w-full'>
                        <div className='font-bold text-xl'>Loại giấy</div>
                        <InputSelect
                          isOpen={typePaperOpen}
                          setIsOpen={setTypePaperOpen}
                          value={rangeValue}
                          setValue={setRangeValue}
                          placeHolder='Chọn loại giấy'
                          options={[
                            { label: 'A1', value: 'A1' },
                            { label: 'A2', value: 'A2' },
                            { label: 'A3', value: 'A3' },
                            { label: 'A4', value: 'A4' },
                            { label: 'A5', value: 'A5' },
                          ]}
                        />
                      </div>
                      <div className='w-full'>
                        <div className='font-bold text-xl'>Đóng thành tập</div>
                        <InputSelect
                          isOpen={isBindOpen}
                          setIsOpen={setIsBindOpen}
                          value={isBindValue}
                          setValue={setIsBindValue}
                          placeHolder='Chọn loại giấy'
                          options={[
                            { label: 'Có', value: true },
                            { label: 'Không', value: false },
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex flex-col gap-2'>
                    <div className='font-bold text-xl'>Mô tả thêm</div>
                    <Input />
                  </div>
                  <div className='w-full flex flex-col gap-2'>
                    <div className='font-bold text-xl'>Upload file</div>
                    <Input type='file' />
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className='w-full'
                  onClick={() => {
                    setRangeValue(null);
                    setTypePaperValue(null);
                    setIsBindValue(null);
                  }}
                >
                  Thoát
                </AlertDialogCancel>
                <AlertDialogAction
                  className='w-full '
                  style={{background:"#8B9373"}}
                  onClick={() => {
                    setRangeValue(null);
                    setTypePaperValue(null);
                    setIsBindValue(null);
                    openNotificationWithIcon('success');
                  }}
                >
                  Chọn in
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default PrintDocumentIdPage;
