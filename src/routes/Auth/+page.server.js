import { invalid } from '@sveltejs/kit'
import { users } from '$lib/stores/database/Users'

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const username = data.get('username')
		// How do I fetch/check a database here?
		const foundUser = users.find((user) => user.username === username)

		if (!foundUser) {
			return invalid(400, { username, response: 'User Not Valid' })
		}

		return foundUser
	},

	signUp: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const user = data.get('userInput')
		const userData = JSON.parse(user)

		users.push(userData)

		return {
			msg: 'Success'
		}
	}
}
