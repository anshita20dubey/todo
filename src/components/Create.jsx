import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props)=>{
    const tasks = props.tasks;
    const settasks = props.settasks;
    const [title,settitle] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        const newTodo = { id: nanoid(), title, completed: false };
        // console.log(newTodo);
        // const copytasks = [...tasks]
        // copytasks.push(newtodo);
        // settasks(copytasks)
        settasks([...tasks, newTodo]);
        settitle("");
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTodo]));
      }

    return(
        <form onSubmit={submitHandler} className='w-[35%] flex justify-between px-5 my-[2%]'>
        <input onChange={(e) => settitle(e.target.value)} value={title} className='px-5 py-2 text-yellow-100 outline-none w-[80%] rounded-xl bg-zinc-700' type="text" placeholder='Add your task here...' />
        <button className="outline-none text-4xl font-extrabold flex justify-center items-center w-[5vmax] h-[5vmax] rounded-full bg-orange-600">
          <i className="ri-add-fill"></i>
        </button>
      </form>
    )
}

export default Create;
