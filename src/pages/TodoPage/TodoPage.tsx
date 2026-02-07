import { TEST_TASKS } from '@/data/testTasks'
import { TaskList } from '@/features/tasks/ui/TaskList/TaskList'
import type { TaskPriority, TaskType } from '@/shared/types'
import { createTask } from '@/shared/utils/lib/utils'
import { useState } from 'react'
import { CreateTaskBar } from '../../features/tasks/ui/CreateTaskBar/CreateTaskBar'
import { Toolbar } from '../../features/tasks/ui/Toolbar/Toolbar'
import { Modal } from '../../shared/utils/ui/Modal/Modal'
import './TodoPage.scss'

export function Todo() {
	const [tasks, setTasks] = useState<TaskType[]>(TEST_TASKS)
	const [openCreateTaskModal, setOpenCreateTaskModal] = useState(false)

	const pendingTasks = tasks.filter(task => !task.completed)
	const finishedTasks = tasks.filter(task => task.completed)

	function handleToggleCreateTaskModal() {
		setOpenCreateTaskModal(!openCreateTaskModal)
	}

	function handleAddTask(task: string, tag: string, priority: TaskPriority) {
		handleToggleCreateTaskModal()
		const newTask = createTask(task.trim(), tag, priority)
		setTasks([newTask, ...tasks])
	}

	function handleCompleteTask(id: string) {
		setTasks(tasks.map(t => (t.id === id ? { ...t, completed: true } : t)))
	}

	function handleRemoveTask(id: string) {
		setTasks(tasks.filter(t => t.id !== id))
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
				{pendingTasks.length > 0 ? (
					<TaskList
						title="Active tasks"
						tasks={pendingTasks}
						onComplete={handleCompleteTask}
						onRemove={handleRemoveTask}
					/>
				) : (
					<div className="todo__no-tasks">No active tasks!</div>
				)}
				{finishedTasks.length > 0 && (
					<TaskList
						title="Completed tasks"
						tasks={finishedTasks}
						onComplete={handleCompleteTask}
						onRemove={handleRemoveTask}
					/>
				)}
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
