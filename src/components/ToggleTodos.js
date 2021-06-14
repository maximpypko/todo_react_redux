import { connect } from "react-redux";
import { toggleAllTodos } from "../store/actions";

function ToggleTodos({todos, toggleAllTodos }) {
  
  const isCompletedAllTodos = todos.filter(todo => !todo.completed);

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isCompletedAllTodos.length === 0 && todos.length !== 0 ? true : false}
        onChange={(e) => {
          toggleAllTodos(e.target.checked)
        }}
        />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

const mapStateToProps = state => ({todos: state.todoReducer});

export default connect(mapStateToProps, { toggleAllTodos })(ToggleTodos);