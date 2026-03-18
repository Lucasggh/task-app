import { Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="h-screen flex">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
