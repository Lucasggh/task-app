import { useOutletContext } from "react-router-dom"
import Taskcard from "../components/Taskcard"

export default function ListTask (){
    const [tasks,setTasks] = useOutletContext()
    return(
            <ul className="bg-[#0F172A] w-screen h-screen p-4 border-[#1E293B] border-2 rounded-md gap-2 flex flex-col overflow-scroll">
            { tasks ? tasks.map((task,index) =>{
                return(
                    <li key={index}> <Taskcard setTasks={setTasks} id={task.id} title={task.title} description={task.description}></Taskcard></li>
                )
            }) : null}
            </ul>
    )
}