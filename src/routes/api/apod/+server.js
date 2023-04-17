import { APOD_KEY } from '$env/static/private'
import { error, json } from '@sveltejs/kit'

export const GET = async () => {
	try {
		const nasa_response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${APOD_KEY}&count=15`
		)
		const nasaData = await nasa_response.json()
		return json({
			APOD: nasaData
		})
	} catch (err) {
		console.error(err)
		throw error(404, 'No data')
	}
}
