<script>
	import TempatureData from './TempatureData.svelte'
	import TimeData from './TimeData.svelte'
	import WindData from './WindData.svelte'
	export let weatherData, forcast
</script>

<div
	class="flex flex-col h-full w-62 rounded-l-lg bg-secondary text-secondary-content fill-secondary-content">
	<section class="w-full text-center p-2">
		<h1 class="text-2xl">Today's Forcast</h1>
		<h1
			class="tooltip cursor-help"
			data-tip={`Lat: ${weatherData.coord.lat}; Lon: ${weatherData.coord.lon}`}>
			{weatherData.name} - {weatherData.sys.country}
		</h1>

		<figure class="flex flex-col justify-center items-center w-full">
			<img
				src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
				alt={weatherData.weather[0].main}
				class="w-2/4 drop-shadow-lg" />

			<h2 class="text-xl tooltip cursor-help" data-tip={weatherData.weather[0].description}>
				{weatherData.weather[0].main}
			</h2>
		</figure>
		<div class="divider m-0" />
	</section>

	<div class="flex flex-col w-full h-full">
		<TempatureData {weatherData} />
		<WindData {weatherData} />
		<TimeData {weatherData} />
	</div>
</div>
