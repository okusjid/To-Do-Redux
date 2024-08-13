import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

const Task = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const addNewTask = () => {
        if (task.trim()) {
            dispatch(addTask({ id: Date.now(), task }));
            setTask("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Add task"
            />
            <button onClick={addNewTask}>Add</button>
            
        </div>
    );
};

export default Task;
