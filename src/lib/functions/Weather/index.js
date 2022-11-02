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
