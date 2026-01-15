import type { CreateTaskBarProps } from '@/shared/types'
import { useState } from 'react'
import './CreateTaskBar.scss'

export function CreateTaskBar({ addTask }: CreateTaskBarProps) {
	const [task, setTask] = useState('')
	const [tag, setTag] = useState('')

	function addTaskHandler() {
		addTask(task, tag)
		setTask('')
	}

	return (
		<div className="create-task-bar">
			<input
				type="text"
				placeholder="Create your task..."
				className="create-task-bar__input"
				onChange={e => setTask(e.target.value)}
				value={task}
			/>
			<input
				type="text"
				placeholder="Task tag..."
				className="create-task-bar__input"
				onChange={e => setTag(e.target.value)}
				value={tag}
			/>
			<button
				className="create-task-bar__button"
				onClick={addTaskHandler}
				disabled={!task}
			>
				+
			</button>
		</div>
	)
}
