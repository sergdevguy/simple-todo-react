import { createTask } from '@/shared/utils/lib/utils'

export const TEST_TASKS = [
	createTask('Do localstorage functional', 'work', 'high'),
	createTask(
		'Add "completed at" field, sort completed by "completed at" and reset "created at" if move completed task back',
		'work',
		'high'
	),
	createTask('Add filter', 'work', 'high'),
	createTask(
		'Create task description and open it on click on task',
		'work',
		'high'
	),
	createTask('Relax a lot', 'life', 'medium', true),
	createTask('Play BG3', 'life', 'low')
]
