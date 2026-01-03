export function CreateTaskBar() {
	return (
		<div className="create-task-bar">
			<input
				type="text"
				placeholder="create your task here..."
				className="create-task-bar__input"
			/>
			<button className="create-task-bar__button">Add</button>
		</div>
	)
}
