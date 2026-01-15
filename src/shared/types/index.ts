export type CreateTaskBarProps = {
	addTask: (task: string, tag: string) => void
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
	createdAt: string
	tagName: string
	priority: 'low' | 'medium' | 'high'
}
