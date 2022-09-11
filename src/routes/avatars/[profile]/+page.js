import { faker } from '@faker-js/faker';

export function load({ params }) {
	//! When accessing data from parameters for dynamic routing. It is key to use
	//! Dot Notation to access the data point for this page.
	//! Since the dynamic route folder is [profile], you must point at the exact data point.
	const avatarName = params.profile;

	const avatar = `https://avatars.dicebear.com/api/adventurer/${avatarName}.svg`;

	return { avatarName, avatar };
}
