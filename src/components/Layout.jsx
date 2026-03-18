import { Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

export default function Layout() {
  const[tasks,setTasks] = useState([])
  return (
    <div className="h-screen flex">
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Outlet context={[tasks,setTasks]}/>
      </div>
    </div>
  );
}
