import { error, redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		// TODO log the user in
		console.log(event);

		throw redirect(303, '/');
	}
};
