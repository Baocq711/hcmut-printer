import { HiOutlineXCircle } from 'react-icons/hi2';

export interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white rounded-lg shadow-2xl max-w-[600px] w-full p-6 flex flex-col gap-6'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-semibold flex items-center h-full border-b border-solid border-[#eeeeee] pb-3'>
            {title}
          </h3>
          <button
            className='text-gray-500 hover:text-gray-700 pb-3'
            onClick={onClose}
          >
            <HiOutlineXCircle size={24} />
          </button>
        </div>

        {/* Content */}
        <div className=''>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
