import { Weather_KEY } from '$env/static/private'

import { invalid, redirect, error } from '@sveltejs/kit'

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData()
		const searchTerms = data.get('searchTerms')
		const [geoLocater] = await geoLocate(searchTerms, 1)

		if (geoLocater.length < 1 || !geoLocater) {
			return invalid(400, { searchTerms, msg: 'Not Found' })
		}

		const weatherData = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${geoLocater.lat}&lon=${geoLocater.lon}&units=imperial&appid=${Weather_KEY}`
		)
		const weatherJSON = await weatherData.json()
		const forcast = await getForcast(geoLocater.lat, geoLocater.lon)

		return { weatherJSON, forcast }
	}
}

export async function load({ cookies }) {
	if (cookies.get('sessionID') === '' || !cookies.get('sessionID')) {
		error(401, 'Not Logged In')
		throw redirect(307, '/Auth')
	}

	const geo = await geoLocate()
	const lat = geo[0].lat
	const lon = geo[0].lon
	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${Weather_KEY}`
		)
		const weatherData = await res.json()
		const forcast = await getForcast(lat, lon)

		return {
			weatherData,
			forcast
		}
	} catch (error) {
		console.error(error)
	}
}

const geoLocate = async (city = 'Salt Lake City', limit = 5) => {
	try {
		const res = await fetch(
			`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=${Weather_KEY}`
		)
		return await res.json()
	} catch (error) {
		console.error(error)
	}
}

const getForcast = async (lat, lon) => {
	try {
		const hourlyForcast = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${Weather_KEY}`
		)
		const data = await hourlyForcast.json()

		let dayOne = [],
			dayTwo = [],
			dayThree = [],
			dayFour = [],
			dayFive = []

		data.list.forEach((data, index) => {
			// Checking forcast data that is ever three hours for the next five days, and putting
			// each object into a designated array
			if (index < 8) dayOne.push(data)
			if (index >= 8 && index < 16) dayTwo.push(data)
			if (index >= 16 && index < 24) dayThree.push(data)
			if (index >= 24 && index < 32) dayFour.push(data)
			if (index >= 32 && index < 41) dayFive.push(data)
		})

		return await renderForcastSample([dayOne, dayTwo, dayThree, dayFour, dayFive])
	} catch (error) {
		console.error(error)
	}
}

const renderForcastSample = async (dayArray) => {
	let forcastList = []
	dayArray.forEach((day) => {
		const maxTemp = Math.max(...day.map((data) => data.main.temp))
		const sample = day.find((d) => d.main.temp === maxTemp)
		forcastList.push(sample)
	})
	// Sorting days by ts
	return forcastList.sort((a, b) => a.dt - b.dt)
}
