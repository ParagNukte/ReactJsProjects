import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todos/TodoSlice";

function AddTodo() {
	const [todoInput, setInput] = useState("");
	const dispatch = useDispatch();
	const addTodoHandler = (e) => {
		e.preventDefault();
		dispatch(addTodo(todoInput));
		setInput("");
	};

	return (
		<form onSubmit={addTodoHandler}>
			<input
				type="text"
				name="Hello"
				id=""
				value={todoInput}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
}
export default AddTodo;
