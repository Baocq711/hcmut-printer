import "./SideMenu.css";
import { SidebarButtonActive } from "../SidebarButtonActive";
import {
  ChartPieIcon,
  DocumentCheckIcon,
  ClockIcon,
  ClipboardDocumentListIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { PrinterIcon as PrinterIconSolid } from "@heroicons/react/24/solid";
import { PrinterIcon as PrinterIconOutline } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

interface SideMenuProps {
  className?: string;
}

export const SideMenu: React.FC<SideMenuProps> = ({ className = "", ...props }) => {
  return (
    <div className={`sidemenu-property-1-default ${className}`} {...props}>
      {/* Navigation Links */}
      <div className="frame-116">
        <NavLink to="/" className={({ isActive }) => `sidebar-button ${isActive ? "active" : ""}`}>
          <ChartPieIcon className="icon-frame" />
          <div className="text">Bảng điều khiển</div>
        </NavLink>

        <NavLink to="/print-document" className={({ isActive }) => `sidebar-button ${isActive ? "active" : ""}`}>
          <DocumentCheckIcon className="icon-frame" />
          <div className="text">In ấn tài liệu</div>
        </NavLink>

        <NavLink to="/history" className={({ isActive }) => `sidebar-button ${isActive ? "active" : ""}`}>
          <ClockIcon className="icon-frame" />
          <div className="text">Lịch sử in ấn</div>
        </NavLink>

        <NavLink to="/report" className={({ isActive }) => `sidebar-button ${isActive ? "active" : ""}`}>
          <ClipboardDocumentListIcon className="icon-frame" />
          <div className="text">Báo cáo chi tiêu</div>
        </NavLink>

        <NavLink to="/printer" className={({ isActive }) => `sidebar-button ${isActive ? "active" : ""}`}>
          <PrinterIconOutline className="icon-frame" />
          <div className="text">Máy in</div>
        </NavLink>
      </div>

      {/* Sidebar Bottom Section */}
      <div className="frame-117">
        <div className="frame-118">
          <div className="sidebar-button">
            <UserCircleIcon className="icon-frame" />
            <div className="l-ch-s-mua-h-ng">Tài khoản</div>
          </div>

          <div className="sidebar-button">
            <Cog6ToothIcon className="icon-frame" />
            <div className="l-ch-s-mua-h-ng">Cài đặt</div>
          </div>

          <div className="sidebar-button">
            <ArrowRightStartOnRectangleIcon className="icon-frame" />
            <div className="l-ch-s-mua-h-ng">Thoát</div>
          </div>
        </div>
      </div>

      {/* Sidebar Footer Section */}
      <div className="t-nh-n-ng">Tính năng</div>
      <div className="h-tr">Hỗ trợ</div>

      {/* Logo and Branding */}
      <div className="frame-111">
        <div className="rectangle-5407"></div>
        <div className="ellipse-11"></div>
      </div>

      <div className="frame-1">
        <div className="solar-bolt-circle-bold">
          <PrinterIconSolid className="group-2463" />
        </div>
        <div className="hcmut-ssps">HCMUT SSPS</div>
      </div>

      <div className="ki-m-tra-ho-t-ng-in-n-c-a-b-n-m-i-l-c-m-i-n-i">
        Kiểm tra hoạt động in ấn của bạn mọi lúc mọi nơi!
      </div>

      <div className="frame-110">
        <div className="ki-m-tra">Kiểm tra</div>
      </div>
    </div>
  );
};
