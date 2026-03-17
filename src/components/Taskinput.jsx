import { useForm } from "react-hook-form";

export default function Taskinput() {
  const { register } = useForm();
  return (
    <form className="flex justify-center gap-3 p-3 border-blue-600 border-2 bg-blue-400 w-100 rounded-xl flex-col">
        <div className="flex items-center">
      <label className="inline-block w-20" htmlFor="task">Tarefa: </label>
      <input
        type="text"
        name="task"
        className="flex-1 bg-blue-500 rounded-md m-1 border-2 border-blue-600 text-center resize-none"
        {...register("task")}
      /></div>
      <div className="flex items-center">
      <label className="inline-block w-20" htmlFor="inputTarefa">Descrição: </label>
      <textarea
        type="text"
        placeholder="Nova tarefa "
        name="inputTarefa"
        className="flex-1 bg-blue-500 rounded-md m-1 border-2 border-blue-600 text-center resize-none"
        {...register("description")}
      ></textarea></div>
      <div className="flex mx-auto">
      <button
        type="submit"
        className="w-20 justify-self-center bg-blue-500 border-2 border-blue-600 rounded-md shadow-xl hover:scale-110 hover:shadow-xl/20 cursor-pointer transition-all duration-300 "
      >
        Criar
      </button></div>
    </form>
  );
}
