import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../actions";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <p>{task.task}</p>
                    {/* Add buttons for edit, delete, toggle, etc. */}
                    <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                    <button onClick={() => dispatch(editTask(task.id, prompt("Edit task", task.task)))}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
