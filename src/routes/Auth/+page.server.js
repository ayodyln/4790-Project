import { invalid } from '@sveltejs/kit'
// Delete later
import { users } from '$lib/stores/database/Users'
import { browser } from '$app/environment'

import * as fs from 'fs'
import multer from 'multer'

const uploadImage = multer({ dest: `static/` })

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
		// const file = data.get('file')

		//? Does not upload anything to the destination defined for uploadImage
		// uploadImage.single(file)

		//? Writes a file, but the image is broke, says an error occurd if you try to view it in VS Code.
		// fs.writeFileSync('./static/test.jpg', userData.avatar, 'base64url')

		//? Won't run because file isn't a string, it's a Blob?
		// fs.writeFileSync('./static/test.jpg', file, 'base64url')

		return {
			userData
		}
	}
}
