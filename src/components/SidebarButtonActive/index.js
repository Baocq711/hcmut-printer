import "./SidebarButtonActive.css";
import { PieChart } from "../PieChart";

export const SidebarButtonActive = ({
	property1 = "sidebar-active",
	className,
	...props
}) => {
	const variantsClassName = "property-1-" + property1;

	return (
		<div
			className={
				"sidebar-button-property-1-sidebar-active " +
				className +
				" " +
				variantsClassName
			}
		>
			<PieChart className="solar-pie-chart-2-bold-instance"></PieChart>
			<div className="b-ng-i-u-khi-n">Bảng điều khiển </div>
		</div>
	);
};
