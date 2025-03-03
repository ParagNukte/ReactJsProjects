import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./Todos.css"; // Import your CSS file

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form onSubmit={addTodoHandler} className="add-todo">
        <div className="input-container">
          <input
            className="addTodoInput"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button id="submitButton" type="submit">Enter todo</button>
        </div>
      </form>
    </>
  );
}


export default AddTodo;
