import { APOD_KEY } from '$env/static/private';
import { error } from '@sveltejs/kit';

//https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=YOUR_API_TOKEN

export async function load() {
	try {
		const NASA_APOD = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${APOD_KEY}&start_date=2022-02-13`
		);
		const apod = await NASA_APOD.json();
		console.log(apod);
		return { APOD: apod };
	} catch (err) {
		throw error(404, 'Not found');
	}
}
