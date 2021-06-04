import { combineReducers } from "redux";
import  todoReducer from "./todosReducer";
import filterReducer from "./filterReducer";


const reducers = combineReducers(
  {
    todoReducer,
    filterReducer,
  })
export default reducers;
