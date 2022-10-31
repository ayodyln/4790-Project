import { error } from '@sveltejs/kit'
// Delete later
import { users } from '$lib/stores/database/Users'

export const actions = {
	login: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		// How do I fetch/check a database here?
		const foundUser = users.find((user) => user.username === username && user.password === password)

		if (foundUser) {
			return {
				username: foundUser.username,
				avatar: foundUser.avatar,
				theme: foundUser.theme
			}
		} else throw error(500, 'Unauthorized')
	},

	signUp: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		users.push({ username, password })
	}
}
