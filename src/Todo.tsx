import { useState } from 'react'
import { CreateTaskBar } from './CreateTaskBar'
import { Task } from './Task'
import type { TaskType } from './types'
import { createTask } from './utils'

const TESTS_TASKS = [
	createTask('read some book', true),
	createTask('listen music'),
	createTask('hard work')
]

export function Todo() {
	const [tasks, setTasks] = useState<TaskType[]>(TESTS_TASKS)

	const unCompletedTaskList = getTasksByCompleted(false)
	const completedTaskList = getTasksByCompleted(true)

	const shouldShowDivider =
		unCompletedTaskList.length > 0 && completedTaskList.length > 0

	function getTasksByCompleted(completed: boolean) {
		return tasks
			.filter(task => task.completed === completed)
			.map(task => {
				return (
					<Task
						key={task.id}
						task={task}
						completeTask={completeTask}
						removeTask={removeTask}
					/>
				)
			})
	}

	function addTask(task: string) {
		setTasks([createTask(task.trim()), ...tasks])
	}

	function completeTask(id: string) {
		setTasks(tasks =>
			tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	function removeTask(id: string) {
		setTasks(tasks => tasks.filter(task => task.id !== id))
	}

	return (
		<div className="todo-wrapper">
			<div className="todo">
				<CreateTaskBar addTask={addTask} />
				{unCompletedTaskList}
				{shouldShowDivider && <hr />}
				{completedTaskList}
			</div>
		</div>
	)
}
