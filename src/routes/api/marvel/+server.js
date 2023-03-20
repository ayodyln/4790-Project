import { MARVEL_KEY, MARVEL_PRIVATE_KEY } from '$env/static/private'
import md5 from 'md5'
import { json } from '@sveltejs/kit'

export const GET = async () => {
	const ts = new Date().getTime()
	const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

	try {
		const Marvel = await fetch(
			`http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&orderBy=title&ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}&limit=100`
		)

		return json({ marvel: await Marvel.json() })
	} catch (error) {
		return error
	}
}

export const POST = async ({ request }) => {
	console.log(request)
	const ts = new Date().getTime()
	const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

	try {
		const Marvel = await fetch(
			`http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&orderBy=title&ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}&limit=100&offset=100`
		)

		return json({ marvel: await Marvel.json() })
	} catch (error) {
		return error
	}
}
