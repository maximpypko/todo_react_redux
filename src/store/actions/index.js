import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_COMPLETED_TODOS,
  TOGGLE_ALL_TODOS,
  CHANGE_FILTER,
} from "./types";

const addTodo = (text) => ({ type: ADD_TODO, text });
const deleteTodo = (id) => ({ type: DELETE_TODO, id });
const editTodo = (id, text, completed) => ({ type: EDIT_TODO, payload:{id, text, completed}});
const toggleTodo = (id, text, completed) => ({ type: TOGGLE_TODO, payload:{id, text, completed} });
const deleteCompletedTodos = () => ({ type: DELETE_COMPLETED_TODOS });
const toggleAllTodos = (checked) => ({ type: TOGGLE_ALL_TODOS, checked });
const changeFilter = (activeFilter) => ({ type: CHANGE_FILTER, activeFilter });

export {
  addTodo,
  editTodo,
  deleteTodo,
  toggleTodo,
  deleteCompletedTodos,
  toggleAllTodos,
  changeFilter,
}