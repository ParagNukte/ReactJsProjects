import { useEffect, useState } from "react";

import "./App.css";
import { TodoProvider } from "./contexts/TodoContexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoMsg) => {
    setTodos((prev) => [{ id: Date.now(), ...todoMsg }, ...prev]);
    console.log("im un add");
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem("todos"));
    if (todoData && todoData.length > 0) {
      setTodos(todoData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo, toggleComplete }}>
      <div className="container">
        <TodoForm />

        <div className="todo-list-container">
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

