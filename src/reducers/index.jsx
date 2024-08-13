import { combineReducers } from "redux";
import tasks from "./TaskReducer"; // Ensure this path points to your tasks reducer file

const rootReducer = combineReducers({
  tasks, // This should point to the actual TaskReducer
});

export default rootReducer;
