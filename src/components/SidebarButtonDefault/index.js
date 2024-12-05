import "./SidebarButtonDefault.css";
import { PieChart } from "../PieChart";

export const SidebarButtonDefault = ({
	showLayers = true,
	property1 = "default",
	size = "big",
	className,
	...props
}) => {
	const variantsClassName = "property-1-" + property1 + " size-" + size;

	return (
		<div
			className={
				"button-property-1-default-size-small " +
				className +
				" " +
				variantsClassName
			}
		>
			{showLayers && (
				<>
					<PieChart className="solar-pie-chart-2-bold-instance"></PieChart>
				</>
			)}
			<div className="withdraw-money">Mua </div>
		</div>
	);
};
