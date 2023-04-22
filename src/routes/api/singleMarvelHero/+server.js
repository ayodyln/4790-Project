import { MARVEL_KEY, MARVEL_PRIVATE_KEY } from '$env/static/private'
import md5 from 'md5'
import { json } from '@sveltejs/kit'

export const GET = async ({ url }) => {
	const id = url.searchParams.get('id')
	const ts = new Date().getTime()
	const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

	try {
		const Marvel = await fetch(
			`http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}&limit=100`
		)

		const marvel = await Marvel.json()
		console.log(marvel)
		return json({ marvel: marvel.data.results })
	} catch (error) {
		return error
	}
}
