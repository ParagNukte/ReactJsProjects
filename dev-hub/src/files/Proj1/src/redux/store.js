import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/features/todos/TodoSlice"; //store should be aware if the entire reduce  object

export const store = configureStore({
	reducer: todoReducer,
});
