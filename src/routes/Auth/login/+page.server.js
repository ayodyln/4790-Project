import { error, redirect, invalid } from '@sveltejs/kit';

const user = {
	username: 'Dyln',
	password: 'Forerunner1337'
};

export const actions = {
	login: async ({ cookies, request }) => {
		// TODO log the user in
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (username === user.username && password === user.password) {
			throw redirect(303, '/');
		} else throw error(500, 'Unauthorized');
	}
};
