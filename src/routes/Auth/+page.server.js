import { invalid } from '@sveltejs/kit'
import { users } from '$lib/stores/database/Users'
import { Auth, Storage } from 'aws-amplify'

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const usernameInput = data.get('username')
		const password = data.get('password')

		const foundUser = users.find((user) => user.username === usernameInput)

		async function signIn() {
			try {
				const user = await Auth.signIn(usernameInput, password)
				return user
			} catch (error) {
				console.log('error signing in', error)
			}
		}
		const USER = await signIn()
		// console.log(USER.setSign)

		if (!USER) {
			return invalid(400, { usernameInput, response: 'User Not Valid' })
		}

		const user = await Auth.currentUserInfo()

		const avatarFile = await Storage.get(`${user.username}-avatar`, {
			level: 'public'
		})

		return {
			msg: 'Authorized',
			foundUser: foundUser,
			user: {
				username: user.username,
				theme: user.attributes['custom:theme'],
				bio: user.attributes['custom:bio'],
				avatar: avatarFile
			}
		}
	},

	signUp: async ({ request }) => {
		// TODO log the user in
		const data = await request.formData()
		const username = data.get('username')
		const email = data.get('email')
		const password = data.get('password')
		const bio = data.get('bio')
		const files = data.getAll('file')
		console.log(files[0])

		// users.push({})

		const theme = 'light'

		async function signUp() {
			try {
				const { user } = await Auth.signUp({
					username: username,
					password: password,
					attributes: {
						email: email,
						'custom:theme': theme,
						'custom:bio': bio
					}
				})
				console.log(user)
				return user
			} catch (error) {
				console.log('error signing up:', error)
			}
		}

		await signUp()

		return {
			msg: 'Signed Up!',
			username: username
		}
	},

	confirmSignUp: async ({ request }) => {
		const data = await request.formData()
		const username = data.get('username')
		const code = data.get('verification')

		async function confirmSignUp() {
			try {
				const user = await Auth.confirmSignUp(username, code)
				return user
			} catch (error) {
				console.log('error confirming sign up', error)
			}
		}

		const confirmed = await confirmSignUp()
		console.log(confirmed)

		return {
			msg: 'Success'
		}
	}
}
