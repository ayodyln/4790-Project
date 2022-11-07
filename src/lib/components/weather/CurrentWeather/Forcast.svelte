<script>
	import WeatherIcon from './WeatherIcon.svelte'
	import { genDayTitle } from '../../../functions/Weather/index'
	export let forcast

	forcast.forEach((day) => {})
</script>

<div class="card bg-base-100 shadow-xl w-fit">
	<div class="card-body p-2">
		<h2>Five Day Forcast</h2>
		<ul class="flex gap-2 w-fit">
			{#each forcast as day, index (index)}
				<li class="card bg-base-200 p-1 w-24 h-32 flex flex-col justify-between items-center gap-1">
					<div class="w-1/2 h-fit flex flex-col gap-4 items-center">
						<p>{genDayTitle(index, day)}</p>
						<WeatherIcon weather={day.weather} />
					</div>
					<div>
						<p>{day.main.temp}{@html '&#176;'}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
