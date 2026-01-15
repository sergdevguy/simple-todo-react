export function createTask(
	text: string,
	tagName = '',
	priority: 'low' | 'medium' | 'high' = 'low',
	completed = false
) {
	return {
		id: crypto.randomUUID(),
		text,
		completed,
		createdAt: getCurrentDateTime(),
		tagName,
		priority
	}
}

function getCurrentDateTime() {
	const now = new Date()

	const day = String(now.getDate()).padStart(2, '0')
	const month = String(now.getMonth() + 1).padStart(2, '0')
	const year = now.getFullYear()

	const hours = String(now.getHours()).padStart(2, '0')
	const minutes = String(now.getMinutes()).padStart(2, '0')

	return `${day}-${month}-${year} ${hours}:${minutes}`
}
