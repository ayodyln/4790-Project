import { faker } from '@faker-js/faker'

//! Input Properties:
// This is the way to load props/data into your page from a module JS/TS file for +page.svelte
// load() is the function initializer to load data (similiar to getServerSideProps())
export const load = async () => {
	const Avatars = [...Array(50)].map((el, id) => {
		const name = faker.name.fullName()
		const image = `https://avatars.dicebear.com/api/bottts/${name}.svg`
		return {
			id,
			name,
			image
		}
	})

	return { AvatarData: Avatars }
}
