import { useNavigate } from "react-router-dom"
import { IoMenuSharp } from "react-icons/io5";

export default function Navbar(){
    const pages = [{text:"Create Task",link:"/"},{text:"Tasks",link:"/ListTask"}]
    const navigate = useNavigate()
    return(
        <div className=" w-fit h-15 bg-[#1E293B] flex justify-center items-center px-5 rounded-full">
        <button> <IoMenuSharp color="white" size={50}/></button>
        {/*<ul className="gap-5 flex flex-col">
                { pages.map((task,index) =>{
                    return(
                    <li key={index}>
                        <button
                        className="w-fit p-2 justify-self-center bg-[#1E293B] border-2 border-[#334155] text-[#E2E8F0] rounded-md shadow-xl hover:bg-[#6366F1] hover:border-[#4F46E5] hover:scale-110 hover:shadow-xl/20 cursor-pointer transition-all duration-300 "
                        onClick={()=>navigate(task.link)}
                        >{task.text}</button>
                    </li>)
                })}
            </ul> */}
        </div>  
    )
}