import { useState } from 'react'
import type { CreateTaskBarProps } from './types'

export function CreateTaskBar({ addTask }: CreateTaskBarProps) {
	const [task, setTask] = useState('')

	function addTaskHandler() {
		addTask(task)
		setTask('')
	}

	return (
		<div className="create-task-bar">
			<input
				type="text"
				placeholder="create your task here..."
				className="create-task-bar__input"
				onChange={e => setTask(e.target.value)}
				value={task}
			/>
			<button
				className="create-task-bar__button"
				onClick={addTaskHandler}
				disabled={!task}
			>
				Add
			</button>
		</div>
	)
}
