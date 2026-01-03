import { useState } from 'react'
import { CreateTaskBar } from './CreateTaskBar'
import { Task } from './Task'

export function Todo() {
	const [tasks, setTasks] = useState([])

	return (
		<div className="todo-wrapper">
			<div className="todo">
				<CreateTaskBar />
				<Task />
			</div>
		</div>
	)
}
