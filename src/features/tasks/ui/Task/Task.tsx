import { TaskInfo } from '@/features/tasks/ui/TaskInfo/TaskInfo'
import type { TaskProps } from '@/shared/types'
import { Checkbox } from 'antd'
import { TaskSettings } from '../TaskSettings/TaskSettings'
import './Task.scss'

export function Task({ task, onComplete, onRemove }: TaskProps) {
	const priority = {
		low: 'task__low',
		medium: 'task__medium',
		high: 'task__high'
	}

	return (
		<div className={`task ${priority[task.priority]}`}>
			<div className="task__main">
				<div className="task__line">
					<Checkbox
						checked={task.completed}
						onChange={() => onComplete(task.id)}
					/>
					<p className="task__label">{task.text}</p>
				</div>
				<TaskSettings />
				{/* <DeleteOutlined onClick={() => onRemove(task.id)} /> */}
			</div>
			<TaskInfo
				tagName={task.tagName}
				createdAt={task.createdAt}
			/>
		</div>
	)
}
