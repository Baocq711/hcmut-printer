import './RecentTransaction.css';
import { useState, useEffect } from 'react';

// Định nghĩa kiểu cho dữ liệu trả về từ API
interface TransactionData {
  value_in: number;
  value_out: number;
  // Nếu có thêm các thuộc tính khác từ API, bạn có thể thêm vào đây
}

function RecentTransaction() {
  // Định nghĩa kiểu cho state 'data' là một mảng các đối tượng TransactionData
  const [data, setData] = useState<TransactionData[]>([]);

  useEffect(() => {
    fetch('http://localhost:3002/transaction')
      .then((res) => res.json())
      .then((data: TransactionData[]) => {
        setData(data); // Đảm bảo dữ liệu có kiểu TransactionData[]
      });
  }, []);

  // Chỉ lấy 8 phần tử cuối cùng
  const recentData = data.slice(-8);

  // Tìm giá trị lớn nhất trong value_in và value_out của các phần tử gần đây
  const maxValue = Math.max(
    ...recentData.map((item) => Math.max(item.value_in, item.value_out))
  );

  // Tính toán phần trăm cho mỗi giao dịch
  const percentageData = recentData.map((item) => {
    if (item.value_in > 0) {
      return {
        ...item,
        percentage: (item.value_in / maxValue) * 100,
        type: 'in' as const, // dùng 'as const' để TypeScript hiểu đây là kiểu cố định
      };
    } else {
      return {
        ...item,
        percentage: (item.value_out / maxValue) * 100,
        type: 'out' as const, // dùng 'as const' để TypeScript hiểu đây là kiểu cố định
      };
    }
  });

  console.log(data);

  return (
    <div className='bar-chart' style={{ width: '380px' }}>
      <div className='content-box'>
        <div
          className='text'
          style={{ marginBottom: '20px', marginTop: '20px' }}
        >
          Hoạt động gần đây
        </div>
        {percentageData.map((item, index) => {
          const fillClass = item.type === 'in' ? 'green-fill' : 'orange-fill';

          return (
            <div key={index} className='bar-container'>
              <div className='gray-bar'>
                <div
                  className={fillClass}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentTransaction;
