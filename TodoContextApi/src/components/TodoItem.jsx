import { useState } from "react";
import { useTodo } from "../contexts/TodoContexts";

function TodoItem({ todo }) {
  //todo in props is aquired from TodoContext file "" todos ""
  const [isEditable, setIsEditable] = useState(false);
  const [todoMessage, setTodoMessage] = useState(todo.todo);
  const { updateTodo, removeTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMessage });
    setIsEditable(false);
  };
  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <>
      <div
        style={
          todo.isCompleted
            ? { backgroundColor: "red" }
            : { backgroundColor: "white" }
        }
      >
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={toggleCompleted}
        />
        <input
          type="text"
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
          readOnly={!isEditable}
        />
        <button
          onClick={() => {
            if (todo.isCompleted) return;

            if (isEditable) {
              editTodo();
            } else {
              setIsEditable((prev) => !prev);
            }
          }}
          disabled={todo.isCompleted}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
        <button onClick={() => removeTodo(todo.id)}>Delete</button>
      </div>
    </>
  );
}

export default TodoItem;
