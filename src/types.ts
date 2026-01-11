export type CreateTaskBarProps = {
	addTask: (task: string) => void
}

export type TaskListProps = {
	tasks: TaskType[]
	onComplete: (id: string) => void
	onRemove: (id: string) => void
}

export type TaskProps = {
	task: TaskType
	onComplete: (id: string) => void
	onRemove: (id: string) => void
}

export type TaskType = {
	id: string
	text: string
	completed: boolean
}
