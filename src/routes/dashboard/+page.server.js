// import { Weather_KEY } from '$env/static/private';

export async function load() {
	const geo = await geoLocate();
	const lat = geo[0].lat;
	const lon = geo[0].lon;

	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.Weather_KEY}`
		);
		const data = await res.json();
		return {
			weatherData: data
		};
	} catch (error) {
		console.error(error);
	}
}

const geoLocate = async () => {
	const limit = 5;
	const city = 'Salt Lake City';
	try {
		const res = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${process.env.Weather_KEY}`
		);
		const data = await res.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};
