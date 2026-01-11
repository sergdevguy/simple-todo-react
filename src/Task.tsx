import type { TaskProps } from './types'

export function Task({ task, onComplete, onRemove }: TaskProps) {
	return (
		<div className="task">
			<div className="task__main">
				<input
					type="checkbox"
					name="completed"
					id={`completed-${task.id}`}
					checked={task.completed}
					className="task__checkbox"
					onChange={() => onComplete(task.id)}
				/>
				<p className="task__label">{task.text}</p>
			</div>
			<button
				className="task__delete-btn"
				onClick={() => onRemove(task.id)}
			>
				&#128465;
			</button>
		</div>
	)
}
