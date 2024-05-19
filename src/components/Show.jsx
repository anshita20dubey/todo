import { useContext } from "react";
import { taskscontext } from "../Context/TasksContext";

const Show = () => {
    const [tasks,settasks] = useContext(taskscontext);
    const completeHandler = (index) => {
        // console.log(index);
        const copytasks = [...tasks];
        copytasks[index].completed = !copytasks[index].completed;
        settasks(copytasks);
        localStorage.setItem("tasks", JSON.stringify(copytasks));
    }

    const deleteHandler = (id) => {
        settasks(tasks.filter((t) => t.id != id));
        localStorage.setItem("tasks", JSON.stringify(tasks.filter((t) => t.id != id)));
    }

    return (
        <ul className="list-none w-[35%]">
            {tasks.length > 0 ? (
                tasks.map((task, index) => {
                    return (
                        <li key={task.id} className="mb-5 flex justify-between items-center border rounded-xl p-5">
                            <div className="flex items-center">
                                <div onClick={() => completeHandler(index)} className={`${task.completed ? "bg-green-600" : "border"} mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}></div>
                                <h1 className={` ${task.completed ? "line-through" : ""} text-2xl font-extrabold text-yellow-100`}>
                                    {task.title}
                                </h1>
                            </div>
                            <div className="flex gap-3 text-2xl text-yellow-100">
                                <i className="ri-file-edit-line"></i>
                                <i onClick={() => deleteHandler(task.id)} className="ri-delete-bin-3-line cursor-pointer"></i>
                            </div>
                        </li>
                    );
                })
            ) : (
                <h1 className="mt-10 w-full text-center text-orange-600 text-3xl">
                    No Pending Tasks
                </h1>
            )}
        </ul>
    )
}

export default Show;
