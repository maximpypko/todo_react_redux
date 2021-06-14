import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_COMPLETED_TODOS,
  TOGGLE_ALL_TODOS,
} from "../actions/types";

const todoReducer = (state = [], { type, payload }) => {

  switch (type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        title: payload,
        completed: false,
      }
      return [newTodo, ...state];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== payload);
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            title: payload.text,
            completed: payload.completed,
          }
        } else {
          return todo;
        }
      });
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            title: payload.title,
            completed: payload.completed,
          }
        } else {
          return todo;
        }
      });
    case DELETE_COMPLETED_TODOS:
      return state.filter((todo) => !todo.completed);
    case TOGGLE_ALL_TODOS:
      return state.map((todo) => ({
        ...todo,
        completed: payload,
      }));
    default:
      return state;
  }
}

export default todoReducer;