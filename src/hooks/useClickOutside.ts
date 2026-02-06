import { useEffect, type RefObject } from 'react'

export function useClickOutside(
	ref: RefObject<HTMLElement | null>,
	callback: () => void
) {
	useEffect(() => {
		function handleClick(event: MouseEvent) {
			const el = ref.current
			if (!el) {
				return
			}

			if (!el.contains(event.target as Node)) {
				callback()
			}
		}

		document.addEventListener('mousedown', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	}, [ref, callback])
}
