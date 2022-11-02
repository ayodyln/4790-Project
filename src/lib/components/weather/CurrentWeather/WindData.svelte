<script>
	import { CompassDirection } from '$lib/functions/Weather/index.js'

	export let weatherData

	let direction = CompassDirection(weatherData.wind.deg)
</script>

<div class="flex flex-col items-center">
	<section class="grid w-full grid-cols-2 grid-flow-row gap-0.5">
		<div
			class="flex h-14 w-full items-center gap-2  tooltip cursor-help bg-secondary p-2"
			data-tip="Wind Speed">
			<svg class="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" /></svg>
			<p>
				{weatherData.wind.speed} <span class="text-sm">MPH</span>
			</p>
		</div>

		<div
			class="flex h-14 w-full items-center gap-2  tooltip cursor-help bg-secondary p-2"
			data-tip="Wind Direction">
			<svg class="w-6 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" /></svg>

			<p>
				{direction}
			</p>
		</div>
	</section>
</div>
