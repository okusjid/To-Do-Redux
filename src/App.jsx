import Task from "./components/Task";
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  return (
    <>
      <h1>TO-DO-REDUX</h1>
      <div className="addTask">
        <Task />
      </div>
      <TaskList />
      <div className="tasks"></div>
    </>
  );
}

export default App;
