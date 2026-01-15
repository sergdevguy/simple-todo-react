import { TaskList } from '@/components/TaskList'
import type { TaskType } from '@/shared/types'
import { createTask } from '@/shared/utils'
import { useState } from 'react'
import { CreateTaskBar } from './CreateTaskBar'
import { Modal } from './Modal'
import './Todo.scss'
import { Toolbar } from './Toolbar'

const TEST_TASKS = [
	createTask('start create todo app', 'work', 'low', true),
	createTask('add frame motion', 'work'),
	createTask('sleep a lot', 'life')
]

export function Todo() {
	const [tasks, setTasks] = useState<TaskType[]>(TEST_TASKS)
	const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false)

	const pendingTasks = tasks.filter(task => !task.completed)
	const finishedTasks = tasks.filter(task => task.completed)
	const shouldShowDivider = pendingTasks.length > 0 && finishedTasks.length > 0

	function handleToggleCreateTaskModal() {
		setOpenCreateTaskModal(!openCreateTaskModal)
	}

	function handleAddTask(task: string, tag: string) {
		setOpenCreateTaskModal(!openCreateTaskModal)
		const newTask = createTask(task.trim(), tag)
		setTasks([newTask, ...tasks])
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
		<div className="todo">
			<Modal
				isShow={openCreateTaskModal}
				onClose={handleToggleCreateTaskModal}
			>
				<CreateTaskBar addTask={handleAddTask} />
			</Modal>
			<Toolbar />
			<div className="todo__content">
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
			<button
				className="create-task-button"
				onClick={handleToggleCreateTaskModal}
			>
				New task
			</button>
		</div>
	)
}
