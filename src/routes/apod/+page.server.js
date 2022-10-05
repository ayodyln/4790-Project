// import { APOD_KEY } from '$env/static/private';

export const prerender = true;

export async function load() {
	try {
		const nasa_response = await fetch(
			`https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_KEY}&count=10`
		);
		const nasaData = await nasa_response.json();
		return {
			APOD: nasaData
		};
	} catch (err) {
		console.error(err);
	}
}
