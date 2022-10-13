import { error, redirect, invalid } from '@sveltejs/kit';
// Delete later
import { users } from '../database/Users';

export const actions = {
	signUp: async ({ cookies, request }) => {
		// TODO log the user in
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		// How do I fetch/check a database here?
		users.push({ username, password });
		throw redirect(303, '/Auth/login');
	}
};
