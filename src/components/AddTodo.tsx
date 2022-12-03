import { ChangeEventHandler, MouseEventHandler } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import "../styles/addTodoCompStyles.css";

interface IAddToDoProps {
	handleEvent: ChangeEventHandler<HTMLInputElement>;
	handleCLick: MouseEventHandler<SVGElement>;
	val: string;
}

export default function AddTodo({
	handleEvent,
	handleCLick,
	val,
}: IAddToDoProps) {
	return (
		<div className="addTodoContainer">
			<input
				id="text"
				onChange={handleEvent}
				placeholder="Add new todo"
				type={"text"}
				value={val}
			/>
			<AiOutlinePlusCircle
				onClick={handleCLick}
				className="icon"
				size={30}
				color="green"
			/>
		</div>
	);
}
