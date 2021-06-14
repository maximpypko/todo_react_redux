import { connect } from "react-redux";
import React, { useState, useRef, useEffect } from "react";
import { deleteTodo, editTodo, toggleTodo}  from "../store/actions"

function TodoItem({id, title, completed, toggleTodo, deleteTodo, editTodo}) {
  const editRef = useRef();
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(title);
  const classNameCompleted = completed ? 'completed' : '';
  const className = editing ? 'editing' : '';

  useEffect(() => {
    if (editing) editRef.current.focus()
  }, [editing]);
 
  return (
    <li className={`${classNameCompleted} ${className}`}>
      <div className="view">
        <input
          className="toggle"
          onChange={(e) => {
            toggleTodo({ id, title, completed: e.target.checked })
          }}
          checked = {completed ? true : false}
          type="checkbox"
        />
        <label
          onDoubleClick={() => setEditing(true)}>
          {title}
        </label>
        <button className="destroy" onClick={()=> deleteTodo(id)}></button>
      </div>
      <input
        type="text"
        className="edit"
        defaultValue={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onBlur={(e) => {
          editTodo({id, text: e.target.value, completed });
          setEditing(false);
        }}
        onKeyDown={(e) => {
          if (e.key == 'Enter') editTodo(id, e.target.value, completed);
         setEditing(() => e.key === "Enter" ? false : true)
        }}
        ref={editRef}/>
    </li>
  );
}

export default connect(null, {deleteTodo, editTodo, toggleTodo})(React.memo(TodoItem))