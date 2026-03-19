import { useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const pages = [
    { text: "Create Task", link: "/" },
    { text: "Tasks", link: "/ListTask" },
  ];
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
  className={`fixed bottom-4  bg-[#1E293B] flex flex-col items-center p-2
  transition-all duration-300 rounded-xl
  ${isMenuOpen ? "w-52 min-h-[100px]" : "w-12 h-12"}
`}
>
      <ul className={`gap-5 flex-row flex overflow-hidden ${isMenuOpen? "max-h-40 opacity-100 mt-2" :" max-h-0 opacity-0"}`}>
        {pages.map((task, index) => {
          return (
            <li key={index}>
              <button
                className="w-fit p-2 justify-self-center bg-[#1E293B] border-2 border-[#334155] text-[#E2E8F0] rounded-md shadow-xl hover:bg-[#6366F1] hover:border-[#4F46E5] hover:scale-110 hover:shadow-xl/20 cursor-pointer transition-all duration-300 "
                onClick={() => navigate(task.link)}
              >
                {task.text}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="sm:hidden relative cursor-pointer w-10 h-10 grid place-items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <IoMdClose
        size={30}
        color="white"
        className={`absolute transition-all duration-500 ${isMenuOpen? "rotate-90 opacity-100": "rotate-0 opacity-0"}`}
      />
      <IoMenuSharp
        size={30}
        color="white"
        className={`absolute transition-all duration-300 ${isMenuOpen? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
      />
      </div>
    </div>
  );
}
