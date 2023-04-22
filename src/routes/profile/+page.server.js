import { MARVEL_KEY, MARVEL_PRIVATE_KEY } from '$env/static/private'
import md5 from 'md5'
// import { json, error } from '@sveltejs/kit'

export const actions = {
	getComic: async ({ request }) => {
		const data = await request.formData()
		const heroData = data.get('url')
		console.log(heroData)

		const ts = new Date().getTime()
		const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

		try {
			const Marvel = await fetch(`${heroData}?ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}`)

			const marvel = await Marvel.json()

			return marvel
		} catch (error) {
			console.log(error)
		}
	}
}


