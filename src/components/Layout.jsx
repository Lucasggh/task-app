import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0F172A]">
      
      <Outlet context={[tasks, setTasks]} />
      <Navbar></Navbar>
    </div>
  );
}
