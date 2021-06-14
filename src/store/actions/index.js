import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_COMPLETED_TODOS,
  TOGGLE_ALL_TODOS,
  CHANGE_FILTER,
} from "./types";

export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const editTodo = (todo) => ({ type: EDIT_TODO, payload: todo });
export const toggleTodo = (todo) => ({ type: TOGGLE_TODO, payload: todo});
export const deleteCompletedTodos = () => ({ type: DELETE_COMPLETED_TODOS });
export const toggleAllTodos = (checked) => ({ type: TOGGLE_ALL_TODOS, payload: checked });
export const changeFilter = (activeFilter) => ({ type: CHANGE_FILTER, payload: activeFilter });