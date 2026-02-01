import type { CreateTaskBarProps, TaskPriority } from '@/shared/types'
import { Input, Radio } from 'antd'
import { useState } from 'react'
import './CreateTaskBar.scss'

export function CreateTaskBar({ addTask }: CreateTaskBarProps) {
	const [task, setTask] = useState('')
	const [tag, setTag] = useState('')
	const [priority, setPriority] = useState<TaskPriority>('low')

	function addTaskHandler() {
		addTask(task, tag, priority)
		setTask('')
	}

	return (
		<div className="create-task-bar">
			<Input
				size="large"
				placeholder="Create your task..."
				value={task}
				onChange={e => setTask(e.target.value)}
			/>
			<Input
				size="large"
				placeholder="Task tag..."
				value={tag}
				onChange={e => setTag(e.target.value)}
			/>
			<div className="create-task-bar__priority">
				<span>Select priority</span>
				<Radio.Group
					value={priority}
					options={[
						{ value: 'low', label: 'low' },
						{ value: 'medium', label: 'medium' },
						{ value: 'high', label: 'high' }
					]}
					onChange={e => setPriority(e.target.value)}
				/>
			</div>
			<button
				className="create-task-bar__button"
				onClick={addTaskHandler}
				disabled={!task}
			>
				+
			</button>
		</div>
	)
}
