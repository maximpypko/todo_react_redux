import { connect } from "react-redux";
import { TOGGLE_ALL_TODOS } from "../store/actions/types";

function ToggleTodos({state, toggleAllTodos }) {
  
  const isCompletedAllTodos = state.todoReducer.filter(todo => !todo.completed);
  
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isCompletedAllTodos.length === 0 && state.todoReducer.length !== 0 ? true : false}
        onChange={(e) => {
          toggleAllTodos(e.target.checked)
        }}
        />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

const mapStateToProps = state => ({ state });

function mapDispatchToProps (dispatch) {
  return {
    toggleAllTodos: (payload) => dispatch({ type: TOGGLE_ALL_TODOS, payload }),
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(ToggleTodos))