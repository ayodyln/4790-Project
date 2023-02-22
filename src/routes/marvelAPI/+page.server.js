import { MARVEL_KEY, MARVEL_PRIVATE_KEY } from '$env/static/private'
import md5 from 'md5'

export const load = async () => {
	const ts = new Date().getTime()
	const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

	const Marvel = await fetch(
		`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}`
	)
	const marvel_response = await Marvel.json()

	return marvel_response
}
