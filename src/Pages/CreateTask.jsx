import Taskinput from "../components/Taskinput";
import Tasklist from "../components/Tasklist";

export default function CreateTask(){
    return (
        <div className="gap-10 flex flex-col bg-[#011C27] w-auto h-full flex flex-col items-center p-10 gap-10">
           <Taskinput>
            </Taskinput> 
            <Tasklist>

            </Tasklist>
        </div>
    )
}