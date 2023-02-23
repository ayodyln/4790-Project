import { MARVEL_KEY, MARVEL_PRIVATE_KEY } from '$env/static/private'
import md5 from 'md5'

export const GET = async () => {
	const ts = new Date().getTime()
	const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

	try {
		const Marvel = await fetch(
			`http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&orderBy=title&ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}&limit=100`
		)

		return new Response(JSON.stringify({ marvel: await Marvel.json() }), {
			headers: {
				'content-type': 'application/json'
			}
		})
	} catch (error) {
		return error
	}
}
