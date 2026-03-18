import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

export default function CreateTask() {
    const [ tasks,setTasks] = useOutletContext()
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const newTask = {
        title:data.title,
        description:data.description,
        id: Math.floor(Math.random() * (10000 - 1) + 1)
    }
    setTasks((prev) =>{
        return [...prev,newTask]
    })
    alert(`new task created, tasks: ${tasks}`)
  }
  return (
    <div className="gap-10 flex flex-col bg-[#011C27] w-auto h-full flex flex-col items-center p-10 gap-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center gap-3 p-3 border-[#1E293B] border-2 bg-[#0F172A] w-100 rounded-xl flex-col text-[#E2E8F0]"
      >
        <div className="flex items-center">
          <label className="inline-block w-20" htmlFor="task">
            Tarefa:{" "}
          </label>
          <input
            type="text"
            name="task"
            className="flex-1 bg-[#1E293B] rounded-md m-1 border-2 border-[#334155] text-center resize-none text-white"
            {...register("title", { required: true })}
          />
        </div>

        <div className="flex items-center">
          <label className="inline-block w-20" htmlFor="inputTarefa">
            Descrição:{" "}
          </label>
          <textarea
            type="text"
            placeholder="Nova tarefa "
            name="inputTarefa"
            className="flex-1 bg-[#1E293B] rounded-md m-1 border-2 border-[#334155] text-center resize-none text-white"
            {...register("description")}
          ></textarea>
        </div>

        <div className="flex mx-auto">
          <button
            type="submit"
            className="p-2 w-20 justify-self-center bg-[#1E293B] border-2 border-[#4F46E5] text-white rounded-md shadow-xl hover:bg-[#6366F1] hover:scale-110 hover:shadow-xl/20 cursor-pointer transition-all duration-300"
          >
            Criar
          </button>
        </div>
      </form>
    </div>
  );
}
