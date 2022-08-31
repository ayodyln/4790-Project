//TODO: Install aaron-bond.better-comments to read comments more effectively.

import { faker } from '@faker-js/faker';

//! Input Properties:
// This is the way to load props/data into your page from a module JS/TS file for +page.svelte
// load() is the function initializer to load data (similiar to getServerSideProps())
export const load = async ({fetch}) => {
	const Avatars = [...Array(50)].map((el) => {
		return {
			name: faker.name.fullName(),
			image: faker.image.people(640, 480, true)
		};
	});

	const singleAvatar = {
		name: faker.name.fullName(),
		image: faker.image.people(640, 480, true)
	};

	return { fakerData: Avatars, singleFakeData: singleAvatar };
};

//! Code snipped grabbed from MDN Math.random() example.
//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Grabbing a random name by checking array length, offsetting it to allow for full array length.
// Since the method grabs a range of numbers between including 0 and max number as an argument.
// Max number will not be chosen randomly, since it max number is excluded.
// Offset by +1 to include as a possible option in desired range.
export const randomNumber = (max) => Math.floor(Math.random() * max);
