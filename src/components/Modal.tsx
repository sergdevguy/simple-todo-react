import './Modal.scss'

export function Modal({ children, isShow, onClose }: any) {
	return (
		isShow && (
			<div className="modal">
				<div className="modal__content">
					<button
						className="modal__close"
						onClick={onClose}
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 20 20"
						>
							<path
								d="M3 3L17 17M17 3L3 17"
								stroke="white"
								strokeWidth="2"
							/>
						</svg>
					</button>
					{children}
				</div>
			</div>
		)
	)
}
