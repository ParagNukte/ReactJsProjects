/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //providing declaration of variables or functions. Declaration not Defination
  todos: [
    {
      id: 1,
      isCompleted: false,
      todoMsg: "Todo Message",
    },
  ],
  addTodo: (todoMsg) => {},
  removeTodo: (id) => {},
  updateTodo: (id, todoMsg) => {},
  toggleCompete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
