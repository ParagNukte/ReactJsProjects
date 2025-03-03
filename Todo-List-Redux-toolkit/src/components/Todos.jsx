import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  toggleComplete,
} from "../features/todo/todoSlice";

function Todos() {
  const [editState, setEditState] = useState({ id: null, text: "" });
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (id, currentText) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo.completed) {
      setEditState({ id, text: currentText });
    }
  };

  const saveEdit = (id) => {
    if (editState.text.trim()) {
      dispatch(updateTodo({ id, text: editState.text }));
      setEditState({ id: null, text: "" });
    }
  };

  const handleChangeText = (e) => {
    setEditState({ ...editState, text: e.target.value });
  };

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todos.length ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            >
              <div className="todo-checkbox-container">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleComplete(todo.id))}
                  className="todo-checkbox"
                />
              </div>

              <div className="todo-text-container">
                {editState.id === todo.id ? (
                  <input
                    type="text"
                    value={editState.text}
                    onChange={handleChangeText}
                    className="edit-input"
                  />
                ) : (
                  <span className="todo-text">{todo.text}</span>
                )}
              </div>

              <div className="feature-buttons-container">
                {editState.id === todo.id ? (
                  <button
                    className="save-button"
                    onClick={() => saveEdit(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(todo.id, todo.text)}
                    disabled={todo.completed}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="delete-button"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <>No Todos here, Please Add Todos</>
        )}
      </ul>
    </div>
  );
}

export default Todos;
