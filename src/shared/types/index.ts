export type CreateTaskBarProps = {
	addTask: (task: string, tag: string, priority: TaskPriority) => void
}

export type TaskPriority = 'low' | 'medium' | 'high'

export type TaskListProps = {
	title: string
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

export type TaskInfoProps = {
	tagName: string
	createdAt: string
}
