import { useOutletContext } from "react-router-dom"
import Taskcard from "../components/Taskcard"

export default function ListTask (){
    const [tasks,setTasks] = useOutletContext()
    return(
        <div className="bg-[#011C27] h-screen flex items-start justify-center p-10  ">
            <ul className="bg-[#0F172A] w-fit p-10 border-[#1E293B] border-2 rounded-md gap-2 flex flex-col">
            { tasks ? tasks.map((task,index) =>{
                return(
                    <li key={index}> <Taskcard setTasks={setTasks} id={task.id} title={task.title} description={task.description}></Taskcard></li>
                )
            }) : null}
            </ul>
        </div>
    )
}