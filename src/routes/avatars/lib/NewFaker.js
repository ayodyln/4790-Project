import { faker } from '@faker-js/faker';

export const NewFaker = async (userInput) => {
	const [first, last] = userInput.split(' ');
	const avatar = faker.name.fullName({
		firstName: first,
		lastName: last
	});
	const avatarImage = `https://avatars.dicebear.com/api/bottts/${avatar}.svg`;
	return {
		name: avatar,
		image: avatarImage
	};
};
