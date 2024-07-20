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
    //since the todos list is an arrays so we put map, also we
    //want to update particular todo then we fetched that todo by ID

    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //you simply need to toggle the is completed propety if the todo.
    //so we are taking up the id and matching it with the todo id and
    //toggling its complete property.

    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      )
    );
  };

  //and till here the functionalithy for the context is finished
  //and now we will start the local storage functionality from here.

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
    <TodoProvider
      value={{ todos, addTodo, removeTodo, updateTodo, toggleComplete }}
    >
      <TodoForm />

      {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}

      {/*  {todos.map((todo) => (
        <div key={todo.id}>
          <TodoItem todo={todo} />
        </div>
      ))}
       */}
    </TodoProvider>
  );
}

export default App;
