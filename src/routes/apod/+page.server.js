import { APOD_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

export const actions = {
	getAPOD: async ({ request }) => {
		const data = await request.formData()
		const startDate = data.get('startDate')
		console.log(startDate)
		try {
			const nasa_response = await fetch(
				`https://api.nasa.gov/planetary/apod?date=${startDate}&api_key=${APOD_KEY}`
			)
			const nasaData = await nasa_response.json()
			return nasaData
		} catch (err) {
			console.error(err)
			error('404', err)
		}
	}
}
