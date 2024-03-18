import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>
              {todo.text}{" "}
              <button onClick={()=>dispatch(removeTodo(todo.id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
