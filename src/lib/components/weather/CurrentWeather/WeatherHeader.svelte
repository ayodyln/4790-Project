<script>
	export let weatherData
</script>

<section class="w-96 flex flex-col gap-2 text-center self-center">
	<h2
		class="tooltip cursor-help"
		data-tip={`Lat: ${weatherData.coord.lat}; Lon: ${weatherData.coord.lon}`}>
		{weatherData.name}
	</h2>

	<h1 class="text-4xl tooltip cursor-help" data-tip={`Farenheight`}>
		{weatherData.main.temp}{@html '&#176;'}
	</h1>

	<h2 class="text-xl tooltip cursor-help" data-tip={weatherData.weather[0].description}>
		{weatherData.weather[0].main}
	</h2>

	<p class="text-xs">
		High: {weatherData.main.temp_max}{@html '&#176;'} | Low: {weatherData.main
			.temp_min}{@html '&#176;'}
	</p>
</section>
