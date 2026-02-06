import { useClickOutside } from '@/hooks/useClickOutside'
import {
	CheckOutlined,
	DeleteOutlined,
	EditOutlined,
	EllipsisOutlined
} from '@ant-design/icons'
import { useRef, useState } from 'react'
import './TaskSettings.scss'

export function TaskSettings() {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	useClickOutside(ref, () => setIsOpen(false))

	return (
		<div
			className="settings"
			ref={ref}
		>
			<div
				className="settings__button"
				onClick={() => setIsOpen(!isOpen)}
			>
				<EllipsisOutlined />
			</div>
			{isOpen && (
				<div className="settings__menu">
					<div className="settings__menu-item">
						<CheckOutlined />
					</div>
					<div className="settings__menu-item">
						<EditOutlined />
					</div>
					<div className="settings__menu-item">
						<DeleteOutlined />
					</div>
				</div>
			)}
		</div>
	)
}
