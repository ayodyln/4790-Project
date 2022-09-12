import { faker } from '@faker-js/faker';

export function load({ params }) {
	//! When accessing data from parameters for dynamic routing. It is key to use
	//! Dot Notation to access the data point for this page.
	//! Since the dynamic route folder is [profile], you must point at the exact data point.
	const name = params.profile;
	const charImage = `https://avatars.dicebear.com/api/bottts/${name}.svg`;
	const title = faker.name.jobTitle();
	const phone = faker.phone.number('+1 (###) ###-####');
	const email = faker.internet.email(`${name}`);

	return { name, charImage, title, phone, email };
}
