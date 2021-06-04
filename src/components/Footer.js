import { connect } from "react-redux";
import React from "react";
import { DELETE_COMPLETED_TODOS, CHANGE_FILTER, filters } from "../store/actions/types";

const Footer = ({ state, changeFilter, deleteCompletedTodos }) => {

  const changeClassName = className => state.filterReducer === className ? "selected" : "";
  const countActiveTodos = state.todoReducer.filter(todo => !todo.completed);
  const countCompleteTodos = state.todoReducer.length - countActiveTodos.length;
  
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{countActiveTodos.length} </strong>
        items left
      </span>
      <ul className="filters">
        <li>
          <a
            href="/"
            className={changeClassName("all")}
            onClick={(e) => {
              e.preventDefault();
              changeFilter(filters.ALL);
            }
            }
          >
            All
          </a>
        </li>
        <li>
          <a
            href="/active"
            className={changeClassName("active")}
            onClick={(e) => {
              e.preventDefault();
              changeFilter(filters.ACTIVE);
            }
            }
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="/completed"
            className={changeClassName("completed")}
            onClick={(e) => {
              e.preventDefault();
              changeFilter(filters.COMPLETED);
            }
            }
          >
            Completed
          </a>
        </li>
      </ul>
      {
        countCompleteTodos === 0 ||
        (<button className="clear-completed"
          onClick={deleteCompletedTodos}>Clear completed</button>)
      }
    </footer>
  );
};

const mapStateToProps = state => ({ state });

function mapDispatchToProps (dispatch) {
  return {
    deleteCompletedTodos: (payload) => dispatch({ type: DELETE_COMPLETED_TODOS, payload }),
    changeFilter: (payload) => dispatch({ type: CHANGE_FILTER, payload }),
  }
};

export default (connect(mapStateToProps, mapDispatchToProps)(React.memo(Footer)))