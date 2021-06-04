import "./styles.css";
import { connect } from "react-redux";
import  InputTodo  from "./components/InputTodo";
import  ListTodos  from "./components/ListTodos";
import Footer from "./components/Footer";
import ToggleTodos from "./components/ToggleTodos";

function App({state}) {

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <InputTodo/>
      </header>
      <section className="main">
        <ToggleTodos />
        <ListTodos />
      </section>
      {!state.todoReducer.length || <Footer/>}
    </section>
  );
}

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(App)