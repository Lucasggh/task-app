import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTask from "./Pages/CreateTask.jsx";
import ListTask from "./Pages/ListTask.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout></Layout>,
    children:[
      {path:"/",
        element:<CreateTask></CreateTask>
      },
      {path:"/ListTask",
        element:<ListTask></ListTask>
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="h-full flex flex-row w-full w-50">
      <div className="flex-1">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  </StrictMode>,
);
