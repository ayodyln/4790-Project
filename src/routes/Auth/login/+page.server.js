import { error, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ cookies, request }) => {
		// TODO log the user in
		const data = await request.formData();
		const email = data.get('username');
		const password = data.get('password');

		if (email === 'Dyln' && password === 'Forerunner') throw redirect(303, '/');
		else throw error(500, 'Failed Login')
	}
};
