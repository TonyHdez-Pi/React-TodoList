import "./App.css";
import { useState, ChangeEvent } from "react";
import ReactDom from "react-dom/client";

import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import { ITodoList } from "./interfaces";

function App() {
	const [checked, setChecked] = useState<boolean>(false);
	const [task, setTask] = useState<string>("");
	const [todoList, setTodoList] = useState<ITodoList[]>([]);

	const handleClick = () => {
		setChecked(!checked);
	};

	const handleTextChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setTask(e.target.value);
	};

	const handleDelete = (taskToDelete: string): void => {
		setTodoList(
			todoList.filter((task) => {
				return task.taskName != taskToDelete;
			})
		);
	};

	const addTask = (): void => {
		const newTask = { taskName: task, done: checked };
		setTodoList([...todoList, newTask]);
		setTask("");
		console.log(todoList);
	};

	return (
		<div className="App">
			<section className="todoListContainer">
				<AddTodo
					val={task}
					handleCLick={addTask}
					handleEvent={handleTextChange}
				/>
				{todoList.map((task: ITodoList, key: number) => {
					return (
						<ShowTodo
							deleteTask={handleDelete}
							handleClick={handleClick}
							key={key}
							task={task}
						/>
					);
				})}
			</section>
		</div>
	);
}

export default App;

ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
	<App />
);
