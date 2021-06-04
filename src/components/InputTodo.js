import { useState } from 'react';
import { connect } from "react-redux";
import { ADD_TODO } from "../store/actions/types";

function InputTodo({addTodo}) {

  const [inputValue, setInputValue] = useState('');
  const handlerValue = (e) => {
    if (e.target.value.trim()) {
      addTodo(e.target.value.trim());
    }
    setInputValue('');
  };

  return (
    <input
      className="new-todo"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={(e) => {
        if(e.key === 'Enter' && e.target.value.trim()) handlerValue(e)
        }
      }
      onBlur={(e) => handlerValue(e)}
      placeholder="What needs to be done?"
    />
  );
}

const mapStateToProps = state => ({ state });

function mapDispatchToProps (dispatch) {
  return {
    addTodo: (payload) => dispatch({ type: ADD_TODO, payload }),
  } 
}
export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);