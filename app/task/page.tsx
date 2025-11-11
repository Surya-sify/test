"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TaskPage() {

    var TotalTask: any[];
    const [task, setTask] = useState('')

    const handelChange = (e: any) => {
        setTask(e.target.value)
        console.log(task);
    }

    const handelSubmit = (e: any) => {
        console.log('fffffff');
        e.preventDefault();

        if (!TotalTask) {
            TotalTask = [];
        }
        console.log('emty the state');
        setTask('');
        


        TotalTask.push(task);
        console.log(TotalTask);

    }


    return (
        <div>
            <h1>Task Page</h1>
            <label >enter Task</label>
            <input type="text" name="Task" placeholder="enter task" value={task} onChange={handelChange} />
            <button onClick={handelSubmit}>submit</button>
            <p>{task}</p>
        </div>
    );
}