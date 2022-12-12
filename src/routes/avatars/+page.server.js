import { faker } from '@faker-js/faker'
import { redirect, error } from '@sveltejs/kit'

let Avatar_Database = []

export const actions = {
	updateAvatar: async ({ request }) => {
		const data = await request.formData()
		let name = data.get('Name')
		name = JSON.parse(name)
		Avatar_Database = Avatar_Database.filter((avatar) => name.name !== avatar.name)
		return { Avatar_Database, msg: `Removed ${name.name} from Database` }
	}
}

//! Input Properties:
// This is the way to load props/data into your page from a module JS/TS file for +page.svelte
// load() is the function initializer to load data (similiar to getServerSideProps())
export const load = async ({ cookies }) => {
	if (cookies.get('sessionID') === '' || !cookies.get('sessionID')) {
		error(401, 'Not Logged In')
		throw redirect(307, '/Auth')
	}

	const Avatars = [...Array(50)].map((el, id) => {
		const name = faker.name.fullName()
		const image = `https://avatars.dicebear.com/api/bottts/${name}.svg`
		return {
			id,
			name,
			image
		}
	})

	Avatar_Database = Avatars

	if (Avatar_Database.length > 0) {
		return { AvatarData: Avatar_Database }
	}

	return { AvatarData: Avatars }
}
