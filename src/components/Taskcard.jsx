import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

export default function Taskcard({title,setTasks,id}) {
  const deletTask = (id) =>{
    setTasks(prev =>  prev.filter(task => task.id !== id))
  }
  return (
    <div className="bg-[#1E293B] border-2 border-[#334155] rounded-xl flex flex-row p-2 gap-3 justify-center items-center">
      <div className="flex-1">
        <p className="text-sm border-b-[#6366F1] border-b-2 w-fit rounded-sm text-[#E2E8F0]">
          {title}
        </p>
      </div>
      <div className="flex gap-1">
      <button className="w-fit justify-self-center bg-[#1E293B] border-2 border-[#334155] text-[#E2E8F0] rounded-md shadow-xl hover:bg-[#6366F1] hover:border-[#4F46E5] hover:scale-110 hover:shadow-xl/20 cursor-pointer transition-all duration-300 ">
        <IoIosArrowForward size={20} />
      </button>

      <button className="w-fit justify-self-center bg-[#1E293B] border-2 border-[#334155] text-[#E2E8F0] rounded-md shadow-xl hover:bg-red-500 hover:border-red-600 hover:scale-110 hover:shadow-xl/20 cursor-pointer transition-all duration-300"
      onClick={()=> deletTask(id)}>
        <RiDeleteBin6Line size={20} />
      </button></div>
    </div>
  );
}
