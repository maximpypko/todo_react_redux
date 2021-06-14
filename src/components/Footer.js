import { connect } from "react-redux";
import React from "react";
import { deleteCompletedTodos, changeFilter } from "../store/actions";
import { filters } from "../utils/enums";

const Footer = ({ todos, filter, changeFilter, deleteCompletedTodos }) => {

  const changeClassName = className => filter === className ? "selected" : "";
  const countActiveTodos = todos.filter(todo => !todo.completed);
  const countCompleteTodos = todos.length - countActiveTodos.length;
  
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

const mapStateToProps = state => ({
  todos: state.todoReducer,
  filter: state.filterReducer,
});

export default (connect(mapStateToProps, {deleteCompletedTodos, changeFilter})(React.memo(Footer)))