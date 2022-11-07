export const CompassDirection = (compassRad) => {
	let compassDirection

	if (compassRad === 0 || compassRad === 360) {
		compassDirection = 'N'
	} else if (compassRad === 90) {
		compassDirection = 'E'
	} else if (compassRad === 180) {
		compassDirection = 'S'
	} else if (compassRad === 270) {
		compassDirection = 'W'
	} else if (compassRad > 0 && compassRad < 90) {
		compassDirection = 'NE'
	} else if (compassRad > 90 && compassRad < 180) {
		compassDirection = 'SE'
	} else if (compassRad > 180 && compassRad < 270) {
		compassDirection = 'SW'
	} else if (compassRad > 270 && compassRad < 360) {
		compassDirection = 'NW'
	}

	return compassDirection
}

export const WeatherIcon = (weather) => {
	console.log(weather)
	let icon

	return icon
}

//? Generating Week data for 5 day forcast widget.
export const genDayTitle = (index, day) => {
	switch (index) {
		case 0:
			return 'Tomorrow'
		case 1:
			return getDate(day)
		case 2:
			return getDate(day)
		case 3:
			return getDate(day)
		case 4:
			return getDate(day)
		default:
			return null
	}
}
const getDate = (day) => {
	const date = new Date(day.dt_txt)
	const weekday = date.getDay()
	switch (weekday) {
		case 0:
			return 'Sun'
		case 1:
			return 'Mon'
		case 2:
			return 'Tues'
		case 3:
			return 'Wed'
		case 4:
			return 'Thur'
		case 5:
			return 'Fri'
		case 6:
			return 'Sat'
		default:
			return null
	}
}
