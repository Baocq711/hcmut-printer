import "./PieChart.css";
import { ChartPieIcon } from '@heroicons/react/24/solid'

export const PieChart = ({ className, ...props }) => {
	return (
		<ChartPieIcon className={"solar-pie-chart-2-bold " + className} />
	);
};
