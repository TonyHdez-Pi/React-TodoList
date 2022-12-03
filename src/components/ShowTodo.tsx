import React, { MouseEventHandler, useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { ITodoList } from "../interfaces";

import "../styles/todoCompStyles.css";

interface Props {
	task: ITodoList;
	handleClick: MouseEventHandler<SVGElement>;
	deleteTask(taskToDelete: string): void;
}

export default function ShowTodo({ task, handleClick, deleteTask }: Props) {
	const [checked, setChecked] = useState<boolean>(false);
	return (
		<div className="taskContainer">
			<div>
				<BsFillCheckCircleFill
					onClick={() => setChecked(!checked)}
					className="icon"
					size={20}
					color={checked ? "#25273C" : "#fff"}
				/>
				<h2
					style={
						checked
							? { textDecoration: "line-through", color: "#0F90A1" }
							: { textDecoration: "none" }
					}
				>
					{task.taskName}
				</h2>
			</div>
			<AiFillDelete
				onClick={() => deleteTask(task.taskName)}
				size={20}
				color="#fff"
				className="icon"
			/>
		</div>
	);
}
