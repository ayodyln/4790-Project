<script>
	import WeatherIcon from './WeatherIcon.svelte'
	import { genDayTitle } from '../../../functions/Weather/index'
	export let forcast
</script>

<div class="card bg-base-100 shadow-xl w-full h-full text-base-content col-span-4 order-1">
	<div class="card-body p-4 w-full">
		<h2 class="text-lg font-bold">Five Day Forcast</h2>
		<ul class="flex gap-2 w-full h-full">
			{#each forcast as day, index (index)}
				<li
					class="card bg-base-300 p-2 w-1/5 h-36 flex flex-col justify-between items-center gap-1">
					<div class="w-1/2 h-fit flex flex-col gap-4 items-center">
						<p>{genDayTitle(index, day)}</p>
						<WeatherIcon weather={day.weather} />
					</div>
					<div>
						<p>{Math.round((day.main.temp * 100) / 100)}{@html '&#176;'}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
