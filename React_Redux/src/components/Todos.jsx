import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const [editTodoId, setEditTodoId] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onChangeText = (id, newText) => {
    // dispatch(updateTodo({ id, text: newText }));
    console.log("Heeloo Its to update");
  };

  const handleEdit = (id) => {
    setEditTodoId(id);
    setIsEdited(!isEdited);
  };

  return (
    <div className="todos-container">
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div>
              {editTodoId === todo.id && isEdited ? (
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => onChangeText(todo.id, e.target.value)}
                  className="edit-input"
                />
              ) : (
                <span className="todo-text">{todo.text}</span>
              )}
              <span className="feature-buttons">
                {isEdited && editTodoId === todo.id ? (
                  <button
                    className="save-button"
                    onClick={() => setIsEdited(false)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="edit-button"
                    onClick={() => handleEdit(todo.id)}
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
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
