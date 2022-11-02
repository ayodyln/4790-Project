import { Weather_KEY } from '$env/static/private'

export const actions = {
	default: async ({ request }) => {
		console.log(request)
		return 'Hello'
	}
}

export async function load() {
	const geo = await geoLocate()
	const lat = geo[0].lat
	const lon = geo[0].lon

	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${Weather_KEY}`
		)
		const data = await res.json()

		const hourlyForcast = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${Weather_KEY}`
		)
		const forcast = await hourlyForcast.json()
		return {
			weatherData: data,
			forcast
		}
	} catch (error) {
		console.error(error)
	}
}

const geoLocate = async () => {
	const limit = 5
	const city = 'Salt Lake City'
	try {
		const res = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${Weather_KEY}`
		)
		const data = await res.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

// Testing Data
// const weatherData = {
// 	coord: {
// 		lon: -111.8912,
// 		lat: 40.7606
// 	},
// 	weather: [
// 		{
// 			id: 761,
// 			main: 'Dust',
// 			description: 'dust',
// 			icon: '50d'
// 		}
// 	],
// 	base: 'stations',
// 	main: {
// 		temp: 63.52,
// 		feels_like: 60.66,
// 		temp_min: 59.74,
// 		temp_max: 66.24,
// 		pressure: 1009,
// 		humidity: 23
// 	},
// 	visibility: 10000,
// 	wind: {
// 		speed: 29.93,
// 		deg: 170,
// 		gust: 46.04
// 	},
// 	clouds: {
// 		all: 75
// 	},
// 	dt: 1667333555,
// 	sys: {
// 		type: 2,
// 		id: 2004156,
// 		country: 'US',
// 		sunrise: 1667311080,
// 		sunset: 1667348650
// 	},
// 	timezone: -21600,
// 	id: 5780993,
// 	name: 'Salt Lake City',
// 	cod: 200
// }
// const forcast = {
// 	cod: '200',
// 	message: 0,
// 	cnt: 40,
// 	list: [
// 		{
// 			dt: 1667347200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-02 00:00:00'
// 		},
// 		{
// 			dt: 1667358000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-02 03:00:00'
// 		},
// 		{
// 			dt: 1667368800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-02 06:00:00'
// 		},
// 		{
// 			dt: 1667379600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-02 09:00:00'
// 		},
// 		{
// 			dt: 1667390400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.58,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-02 12:00:00'
// 		},
// 		{
// 			dt: 1667401200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.89,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-02 15:00:00'
// 		},
// 		{
// 			dt: 1667412000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 5426,
// 			pop: 0.89,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-02 18:00:00'
// 		},
// 		{
// 			dt: 1667422800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 6178,
// 			pop: 0.93,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-02 21:00:00'
// 		},
// 		{
// 			dt: 1667433600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 720,
// 			pop: 0.95,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 00:00:00'
// 		},
// 		{
// 			dt: 1667444400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 9980,
// 			pop: 0.75,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 03:00:00'
// 		},
// 		{
// 			dt: 1667455200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.75,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 06:00:00'
// 		},
// 		{
// 			dt: 1667466000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.47,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 09:00:00'
// 		},
// 		{
// 			dt: 1667476800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 4584,
// 			pop: 0.68,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 12:00:00'
// 		},
// 		{
// 			dt: 1667487600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.28,
// 			sys: [Object],
// 			dt_txt: '2022-11-03 15:00:00'
// 		},
// 		{
// 			dt: 1667498400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.52,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 18:00:00'
// 		},
// 		{
// 			dt: 1667509200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.37,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-03 21:00:00'
// 		},
// 		{
// 			dt: 1667520000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.29,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 00:00:00'
// 		},
// 		{
// 			dt: 1667530800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 03:00:00'
// 		},
// 		{
// 			dt: 1667541600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 06:00:00'
// 		},
// 		{
// 			dt: 1667552400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 09:00:00'
// 		},
// 		{
// 			dt: 1667563200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 12:00:00'
// 		},
// 		{
// 			dt: 1667574000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 15:00:00'
// 		},
// 		{
// 			dt: 1667584800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 18:00:00'
// 		},
// 		{
// 			dt: 1667595600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.12,
// 			sys: [Object],
// 			dt_txt: '2022-11-04 21:00:00'
// 		},
// 		{
// 			dt: 1667606400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.12,
// 			sys: [Object],
// 			dt_txt: '2022-11-05 00:00:00'
// 		},
// 		{
// 			dt: 1667617200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.04,
// 			sys: [Object],
// 			dt_txt: '2022-11-05 03:00:00'
// 		},
// 		{
// 			dt: 1667628000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.18,
// 			sys: [Object],
// 			dt_txt: '2022-11-05 06:00:00'
// 		},
// 		{
// 			dt: 1667638800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.42,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-05 09:00:00'
// 		},
// 		{
// 			dt: 1667649600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.42,
// 			snow: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-05 12:00:00'
// 		},
// 		{
// 			dt: 1667660400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.6,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-05 15:00:00'
// 		},
// 		{
// 			dt: 1667671200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.54,
// 			sys: [Object],
// 			dt_txt: '2022-11-05 18:00:00'
// 		},
// 		{
// 			dt: 1667682000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.14,
// 			sys: [Object],
// 			dt_txt: '2022-11-05 21:00:00'
// 		},
// 		{
// 			dt: 1667692800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.08,
// 			sys: [Object],
// 			dt_txt: '2022-11-06 00:00:00'
// 		},
// 		{
// 			dt: 1667703600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.3,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-06 03:00:00'
// 		},
// 		{
// 			dt: 1667714400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.36,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-06 06:00:00'
// 		},
// 		{
// 			dt: 1667725200,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 7009,
// 			pop: 0.83,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-06 09:00:00'
// 		},
// 		{
// 			dt: 1667736000,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 197,
// 			pop: 0.91,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-06 12:00:00'
// 		},
// 		{
// 			dt: 1667746800,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 5031,
// 			pop: 0.87,
// 			rain: [Object],
// 			sys: [Object],
// 			dt_txt: '2022-11-06 15:00:00'
// 		},
// 		{
// 			dt: 1667757600,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.87,
// 			sys: [Object],
// 			dt_txt: '2022-11-06 18:00:00'
// 		},
// 		{
// 			dt: 1667768400,
// 			main: [Object],
// 			weather: [Array],
// 			clouds: [Object],
// 			wind: [Object],
// 			visibility: 10000,
// 			pop: 0.04,
// 			sys: [Object],
// 			dt_txt: '2022-11-06 21:00:00'
// 		}
// 	],
// 	city: {
// 		id: 5780993,
// 		name: 'Salt Lake City',
// 		coord: { lat: 40.7596, lon: -111.8868 },
// 		country: 'US',
// 		population: 186440,
// 		timezone: -21600,
// 		sunrise: 1667311079,
// 		sunset: 1667348649
// 	}
// }
