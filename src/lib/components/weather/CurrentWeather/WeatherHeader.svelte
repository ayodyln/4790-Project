<script>
	export let weatherData
</script>

<section class="w-96 h-1/3 flex flex-col gap-2 text-center self-center text-primary-content">
	<h2
		class="tooltip cursor-help"
		data-tip={`Lat: ${weatherData.coord.lat}; Lon: ${weatherData.coord.lon}`}>
		{weatherData.name}
	</h2>

	<h1 class="text-4xl tooltip cursor-help" data-tip={`Farenheight`}>
		{Math.round((weatherData.main.temp * 100) / 100)}{@html '&#176;'}
	</h1>

	<h2 class="text-xl tooltip cursor-help" data-tip={weatherData.weather[0].description}>
		{weatherData.weather[0].main}
	</h2>

	<p class="text-xs">
		High: {weatherData.main.temp_max}{@html '&#176;'} | Low: {weatherData.main
			.temp_min}{@html '&#176;'}
	</p>
</section>
