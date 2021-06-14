import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { filters } from "../utils/enums";

function ListTodos({todos, filter}) {

  const filtersTodos = (() => {
    if (filter === filters.ACTIVE) {
      return todos.filter(todo => !todo.completed);
    }
    if (filter === filters.COMPLETED) {
      return todos.filter(todo => todo.completed);
    } else {
      return todos;
    }
  })

  const filteredTodos = filtersTodos();

  return (
    <ul className="todo-list">
      {
        filteredTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            {...todo}/>
        )
      })}
    </ul>
  );
}

const mapStateToProps = state => ({
    todos: state.todoReducer,
    filter: state.filterReducer,
});

export default connect(mapStateToProps)(ListTodos)