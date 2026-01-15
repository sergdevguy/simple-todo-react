import './TaskInfo.scss'

export function TaskInfo({ tagName, createdAt }) {
	return (
		<div className="task-info">
			<div className="task-info__tag">{tagName ? tagName : 'no tag'}</div>
			<div className="task-info__date">{createdAt}</div>
		</div>
	)
}
