import { invalid } from '@sveltejs/kit'
// Delete later
import { users } from '$lib/stores/database/Users'
import { browser } from '$app/environment'

export const actions = {
	login: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')

		// How do I fetch/check a database here?
		const foundUser = users.find((user) => user.username === username && user.password === password)

		if (browser) window.localStorage.setItem('user', foundUser)

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
		// const avatar = userData.avatar

		// if (userData.avatar) {
		// 	writeFileSync(`src/lib/assets/${avatar}.jpg`, avatar)
		// }

		return {
			userData
		}
	}
}
