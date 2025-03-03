import { useState } from "react";
import { useTodo } from "../contexts/TodoContexts";
import "./todoform.css"
function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;

    addTodo({ todo, isCompleted: false });
    setTodo("");
  };
  return (
    <>
      <form onSubmit={add} className="todo-form">
        <input
          type="text"
          placeholder="Enter the msg"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
