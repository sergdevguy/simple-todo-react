import type { TaskInfoProps } from '@/shared/types'
import './TaskInfo.scss'

export function TaskInfo({ tagName, createdAt }: TaskInfoProps) {
	return (
		<div className="task-info">
			<div className="task-info__tag">{tagName ? tagName : 'no tag'}</div>
			<div className="task-info__date">created: {createdAt}</div>
		</div>
	)
}
