import "./SpendingStatus.css";
import { useState, useEffect } from "react";
import { Column } from '@ant-design/charts';

interface TransactionData {
  date: string;
  value_in: number;
  value_out: number;
}

interface FormattedData {
  weekday: string;
  week: string;
  total: number;
}

function SpendingStatus() {
  const [dataChart, setDataChart] = useState<TransactionData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/transaction")
      .then(res => res.json())
      .then((data: TransactionData[]) => {
        const last14Days = data.slice(-14);
        setDataChart(last14Days);
      });
  }, []);

  const getWeekdayName = (dateStr: string): string => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  const weekdayOrder: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const currentWeek: TransactionData[] = dataChart.slice(7);
  const previousWeek: TransactionData[] = dataChart.slice(0, 7);

  const formattedData: FormattedData[] = [];
  currentWeek.forEach((day, index) => {
    formattedData.push({
      weekday: getWeekdayName(previousWeek[index].date),
      week: "Previous Week",
      total: previousWeek[index].value_in + previousWeek[index].value_out,
    });

    formattedData.push({
      weekday: getWeekdayName(day.date),
      week: "Current Week",
      total: day.value_in + day.value_out,
    });
  });

  const sortedData = formattedData.sort((a, b) => {
    return weekdayOrder.indexOf(a.weekday) - weekdayOrder.indexOf(b.weekday);
  });

  const config = {
    data: sortedData,
    isGroup: true,
    xField: 'weekday',
    yField: 'total',
    seriesField: 'week',
    columnWidthRatio: 0.6,
    dodgePadding: 4,
    color: ({ week }: { week: string }) => {
      return week === 'Current Week' ? '#F4A754' : '#8B9373';
    },
    columnStyle: {
      radius: [10, 10, 0, 0],
    },
    tooltip: {
      shared: true,
      showMarkers: false,
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <Column {...config} />
    </div>
  );
}

export default SpendingStatus;
