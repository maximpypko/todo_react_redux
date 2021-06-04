import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { filters } from "../store/actions/types";

function ListTodos(props) {

  const filtersTodos = (() => {
    if (props.state.filterReducer === filters.ACTIVE) {
      return props.state.todoReducer.filter(todo => !todo.completed);
    }
    if (props.state.filterReducer === filters.COMPLETED) {
      return props.state.todoReducer.filter(todo => todo.completed);
    } else {
      return props.state.todoReducer;
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

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(ListTodos)