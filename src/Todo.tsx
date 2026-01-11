import { useState } from 'react'
import { CreateTaskBar } from './CreateTaskBar'
import { TaskList } from './TaskList'
import type { TaskType } from './types'
import { createTask } from './utils'

const TEST_TASKS = [
	createTask('read some book', true),
	createTask('listen music'),
	createTask('hard work')
]

export function Todo() {
	const [tasks, setTasks] = useState<TaskType[]>(TEST_TASKS)

	const pendingTasks = tasks.filter(task => !task.completed)
	const finishedTasks = tasks.filter(task => task.completed)
	const shouldShowDivider = pendingTasks.length > 0 && finishedTasks.length > 0

	function handleAddTask(task: string) {
		setTasks([createTask(task.trim()), ...tasks])
	}

	function handleCompleteTask(id: string) {
		setTasks(tasks =>
			tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	function handleRemoveTask(id: string) {
		setTasks(tasks => tasks.filter(task => task.id !== id))
	}

	return (
		<div className="todo-wrapper">
			<div className="todo">
				<CreateTaskBar addTask={handleAddTask} />
				<TaskList
					tasks={pendingTasks}
					onComplete={handleCompleteTask}
					onRemove={handleRemoveTask}
				/>
				{shouldShowDivider && <hr />}
				<TaskList
					tasks={finishedTasks}
					onComplete={handleCompleteTask}
					onRemove={handleRemoveTask}
				/>
			</div>
		</div>
	)
}
