import type { TaskListProps } from '@/shared/types'
import { Task } from './Task'
import './TaskList.scss'

export function TaskList({ tasks, onComplete, onRemove }: TaskListProps) {
	return (
		<div className="task-list">
			{tasks.map(task => (
				<Task
					key={task.id}
					task={task}
					onComplete={onComplete}
					onRemove={onRemove}
				/>
			))}
		</div>
	)
}
