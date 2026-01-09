export function createTask(text: string, completed = false) {
	return { id: crypto.randomUUID(), text, completed }
}
