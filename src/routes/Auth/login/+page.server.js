import { error, redirect, invalid } from '@sveltejs/kit';
// Delete later
import { users } from '../database/Users';

export const actions = {
	login: async ({ cookies, request }) => {
		// TODO log the user in
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// How do I fetch/check a database here?
		const foundUser = users.find(
			(user) => user.username === username && user.password === password
		);

		if (foundUser) {
			throw redirect(303, '/');
		} else throw error(500, 'Unauthorized');
	}
};
