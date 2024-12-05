import "./LineChart.css";
import { Area } from "@ant-design/plots"; // Import the Area chart and its types
import { useState, useEffect } from "react";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";

// Define the data type
interface TransactionData {
  date: string;
  value_in: number;
}

function LineChart() {
  const [dataChart, setDataChart] = useState<TransactionData[]>([]);
  const [filteredData, setFilteredData] = useState<TransactionData[]>([]);
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "year">("day");

  useEffect(() => {
    fetch("http://localhost:3002/transaction")
      .then((res) => res.json())
      .then((data: TransactionData[]) => {
        const filteredData = data
          .map((entry) => ({
            date: entry.date,
            value_in: entry.value_in,
          }))
          .filter((entry) => entry.value_in > 0);
        setDataChart(filteredData);
        setFilteredData(filteredData);
      });
  }, []);

  useEffect(() => {
    filterDataByTimeframe(timeframe);
  }, [timeframe, dataChart]);

  const filterDataByTimeframe = (timeframe: "day" | "week" | "month" | "year") => {
    const now = dayjs();
    let filtered = dataChart;

    switch (timeframe) {
      case "day":
        filtered = dataChart.filter((entry) => dayjs(entry.date).isSame(now, "day"));
        break;
      case "week":
        filtered = dataChart.filter((entry) => dayjs(entry.date).isSame(now, "week"));
        break;
      case "month":
        filtered = dataChart.filter((entry) => dayjs(entry.date).isSame(now, "month"));
        break;
      case "year":
        filtered = dataChart.filter((entry) => dayjs(entry.date).isSame(now, "year"));
        break;
      default:
        filtered = dataChart;
    }

    if (filtered.length === 0) {
      filtered = dataChart;
    }
    setFilteredData(filtered);
  };

  if (filteredData.length === 0) {
    return <div>Loading...</div>;
  }

  const highestPeak = filteredData.reduce((prev, curr) => {
    if (!prev) return curr;
    return curr.value_in > prev.value_in ? curr : prev;
  }, null as TransactionData | null);

  const findConvexPeaks = (data: TransactionData[]) => {
    const peaks: TransactionData[] = [];
    for (let i = 1; i < data.length - 1; i++) {
      if (
        data[i].value_in > data[i - 1].value_in &&
        data[i].value_in > data[i + 1].value_in
      ) {
        peaks.push(data[i]);
      }
    }
    return peaks;
  };

  const convexPeaks = findConvexPeaks(filteredData);

  const minValue = Math.min(...filteredData.map((d) => d.value_in));
  const maxValue = Math.max(...filteredData.map((d) => d.value_in));

  const yAxisPadding = (maxValue - minValue) * 0.1;
  const yAxisMin = Math.max(0, minValue - yAxisPadding);
  const yAxisMax = maxValue + yAxisPadding;

  // Type the config object with AreaConfig
  const config: any = {
    data: filteredData,
    xField: "date",
    yField: "value_in",
    shapeField: "smooth",
    point: null,
    areaStyle: () => {
      return {
        fill: "l(270) 0:#FFF5ED 0.5:#FFF5ED 1:#F4A754",
      };
    },
    line: {
      size: 3,
      color: "#F4A754",
    },
    label: {
      position: "top",
      content: (data: TransactionData) => {
        if (
          data.date === highestPeak?.date &&
          data.value_in === highestPeak?.value_in
        ) {
          return data.value_in.toString();
        }
        return "";
      },
      style: {
        fill: "#F4A754",
        fontSize: 16,
        offsetY: -10,
      },
    },
    yAxis: {
      min: yAxisMin,
      max: yAxisMax,
      nice: false,
    },
    slider: {
      start: 0,
      end: 1,
    },
    annotations: convexPeaks.map((peak) => ({
      type: "line",
      start: [peak.date, "min"],
      end: [peak.date, peak.value_in],
      style: {
        stroke: "#F4A754",
        lineDash: [2, 2],
      },
    })),
  };

  console.log("Đây là config: ", config);

  return (
    <>
      <div className="info-box">
        <div className="container">
          <div className="left">
            <div className="icon-box">
              <BanknotesIcon className="icon" />
            </div>
            <div className="text">Hoạt động giao dịch</div>
          </div>
          <div className="right">
            <div
              className={`text ${timeframe === "day" ? "active" : ""}`}
              onClick={() => setTimeframe("day")}
            >
              Ngày
            </div>
            <div
              className={`text ${timeframe === "week" ? "active" : ""}`}
              onClick={() => setTimeframe("week")}
            >
              Tuần
            </div>
            <div
              className={`text ${timeframe === "month" ? "active" : ""}`}
              onClick={() => setTimeframe("month")}
            >
              Tháng
            </div>
            <div
              className={`text ${timeframe === "year" ? "active" : ""}`}
              onClick={() => setTimeframe("year")}
            >
              Năm
            </div>
          </div>
        </div>
        <Area {...config} />
      </div>
    </>
  );
}

export default LineChart;
