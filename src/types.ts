export type TaskType = {
	id: string
	text: string
	completed: boolean
}

export type TaskProps = {
	task: TaskType
	removeTask: (id: string) => void
	completeTask: (id: string) => void
}

export type CreateTaskBarProps = {
	addTask: (task: string) => void
}
