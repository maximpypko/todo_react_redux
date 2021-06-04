import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  DELETE_COMPLETED_TODOS,
  TOGGLE_ALL_TODOS,
} from "../actions/types";
  
const addTodo = (state, text) => {
  const newTodo = {
    id: Date.now(),
    title: text,
    completed: false,
  };
  return [newTodo, ...state];
};

const deleteTodo = (state, id) => {
  return state.filter(todo => todo.id !== id);
};

const editTodo = (state, { id, text, completed }) => {
  return state.map(todo => {
    if (todo.id === id) {
      return {
        id: id,
        title: text,
        completed: completed,
      }
    } else {
      return todo
    }
  })
};

const toggleTodo = (state, { id, title, completed }) => {
  return state.map(todo => {
    if (todo.id === id) {
      return {
        id,
        title,
        completed
      }
    } else {
      return todo
    }
  })
};

const deleteCompletedTodos = (state) => {
  return state.filter((todo) => !todo.completed);
};

const toggleAll = (state, checked) => {
  return state.map((todo) => {
    todo.completed = checked;
    return todo;
  });
};

const todos = [];

const todoReducer = (state = todos, { type, payload }) => {

  switch (type) {
    case ADD_TODO:
      return addTodo(state, payload);
    case DELETE_TODO:
      return deleteTodo(state, payload);
    case EDIT_TODO:
      return editTodo(state, payload);
    case TOGGLE_TODO:
      return toggleTodo(state, payload);
    case DELETE_COMPLETED_TODOS:
      return deleteCompletedTodos(state);
    case TOGGLE_ALL_TODOS:
      return toggleAll(state, payload);
    default:
      return state;
  }
}

export default todoReducer;