import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
function Todos() {
	const listTodos = useSelector((state) => state.todos);
	console.log(listTodos);
	return (
		<div>
			<AddTodo />
			Todos
			{listTodos.map((todo) => {
				return <li key={todo.id}>{todo.name}</li>;
			})}
		</div>
	);
	
}

export default Todos;
