import "./SideBar.css";
// import { SidebarButtonProperty1SidebarActive } from "../SidebarButtonProperty1SidebarActive/SidebarButtonProperty1SidebarActive.jsx";

export const SideBar = ({ className, ...props }) => {
	return (
		<div className={"sidemenu-property-1-default " + className}>
			<div className="frame-116">
				<div className="sidebar-button">
					<img className="icon-frame" src="icon-frame0.svg" />
					<div className="l-ch-s-mua-h-ng">In ấn tài liệu </div>
				</div>
				<div className="sidebar-button">
					<div className="l-ch-s-mua-h-ng2">Lịch sử in ấn </div>
				</div>
				<div className="sidebar-button">
					<div className="b-o-c-o-chi-ti-u">Báo cáo chi tiêu </div>
				</div>
				<div className="sidebar-button">
					<div className="l-ch-s-mua-h-ng">Máy in </div>
				</div>
			</div>
			<div className="frame-117">
				<div className="frame-118">
					<div className="sidebar-button">
						<div className="l-ch-s-mua-h-ng">Tài khoản </div>
					</div>
					<div className="sidebar-button">
						<div className="l-ch-s-mua-h-ng">Cài đặt </div>
					</div>
					<div className="sidebar-button">
						<div className="l-ch-s-mua-h-ng">Thoát </div>
					</div>
				</div>
			</div>
			<div className="t-nh-n-ng">Tính năng </div>
			<div className="h-tr">Hỗ trợ </div>
			<div className="frame-111">
				<div className="rectangle-5407"></div>
				<div className="ellipse-11"></div>
			</div>
			<div className="frame-1">
				<div className="solar-bolt-circle-bold">
				</div>
				<div className="hcmut-ssps">HCMUT SSPS </div>
			</div>
			<div className="ki-m-tra-ho-t-ng-in-n-c-a-b-n-m-i-l-c-m-i-n-i">
				Kiểm tra hoạt động in ấn của bạn mọi lúc mọi nơi!{" "}
			</div>
			<div className="frame-110">
				<div className="ki-m-tra">Kiểm tra </div>
			</div>
		</div>
	);
};
