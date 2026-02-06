import { Task } from '@/features/tasks/ui/Task/Task'
import type { TaskListProps } from '@/shared/types'
import './TaskList.scss'

export function TaskList({
	title,
	tasks,
	onComplete,
	onRemove
}: TaskListProps) {
	return (
		<div className="task-list">
			<div className="task-list__title">
				{title} - {tasks.length}
			</div>
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
