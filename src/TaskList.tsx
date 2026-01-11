import { Task } from './Task'
import type { TaskListProps } from './types'

export function TaskList({ tasks, onComplete, onRemove }: TaskListProps) {
	return tasks.map(task => (
		<Task
			key={task.id}
			task={task}
			onComplete={onComplete}
			onRemove={onRemove}
		/>
	))
}
