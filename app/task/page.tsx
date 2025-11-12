"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TaskPage() {

    const [task, setTask] = useState('')
    const [totalTask, setTotalTask] = useState<string[]>([])
    const [editingIndex, setEditingIndex] = useState<number | null>(null)
    const [editValue, setEditValue] = useState('')

    const handelChange = (e: any) => {
        setTask(e.target.value)
    }
    const handelSubmit = (e: any) => {
        e.preventDefault();
        if (task.trim()) {
            setTotalTask([...totalTask, task]);
            setTask('');
            console.log('Task added:', totalTask);
        }
    }
    
    const handleDelete = (index: number) => {
        setTotalTask(totalTask.filter((_, i) => i !== index));
    }
    
    const handleEditStart = (index: number) => {
        setEditingIndex(index);
        setEditValue(totalTask[index]);
    }
    
    const handleEditSave = (index: number) => {
        const updatedTasks = [...totalTask];
        updatedTasks[index] = editValue;
        setTotalTask(updatedTasks);
        setEditingIndex(null);
    }
    
    const handleEditCancel = () => {
        setEditingIndex(null);
        setEditValue('');
    }


    return (
        <div>
            <h1>Task Page</h1>
            <label >enter Task</label>
            <input type="text" name="Task" placeholder="enter task" value={task} onChange={handelChange} />
            <button onClick={handelSubmit}>submit</button>
            
            <div>
                <h2>Tasks:</h2>
                <p>
                    {totalTask.length === 0 ? (
                        <span>No tasks yet. Add one above!</span>
                    ) : (
                        totalTask.map((t, index) => (
                            <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
                                {editingIndex === index ? (
                                    <div>
                                        <input 
                                            type="text" 
                                            value={editValue} 
                                            onChange={(e) => setEditValue(e.target.value)}
                                            style={{ width: '100%', marginBottom: '5px' }}
                                        />
                                        <button onClick={() => handleEditSave(index)}>Save</button>
                                        <button onClick={handleEditCancel}>Cancel</button>
                                    </div>
                                ) : (
                                    <div>
                                        <span>{t}</span>
                                        <button onClick={() => handleEditStart(index)}>Edit</button>
                                        <button onClick={() => handleDelete(index)}>Delete</button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </p>
            </div>
        </div>
    );
}