import { faker } from '@faker-js/faker';

export async function load({ params }) {
	const { name } = params;
	console.log(params);
	return {
		name,
		avatar: `https://avatars.dicebear.com/api/adventurer/${name}.svg`,
		title: faker.name.jobTitle(),
		phone: faker.phone.number(),
		email: faker.internet.email()
	};
}
