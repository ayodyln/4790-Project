<script>
	export let weatherData

	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { onMount } from 'svelte'

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	})

	onMount(() => {
		progress.set(weatherData.main.humidity)
	})
</script>

<div class="stats shadow-xl fill-primary h-fit">
	<div class="stat">
		<div class="stat-figure text-secondary">
			<div class="radial-progress text-primary" style="--value:{$progress};">
				{Math.round(($progress * 100) / 100)}%
			</div>
		</div>
		<div class="stat-title">Humidity</div>
		<div class="stat-value text-xl p-1">
			<svg class="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M192 496c97.2 0 176-78.8 176-176c0-74.1-102.3-230.6-150.9-300.7c-12.3-17.7-37.8-17.7-50.1 0C118.3 89.4 16 245.9 16 320c0 97.2 78.8 176 176 176zM112 320c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
			</svg>
		</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-secondary">
			<svg class="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M416 128c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm0 64c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96s43 96 96 96zM96 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5V112zM144 0C82.1 0 32 50.2 32 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.3-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C256 50.2 205.9 0 144 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z" />
			</svg>
		</div>
		<div class="stat-title">Max Temp</div>
		<div class="stat-value text-2xl">
			{weatherData.main.temp_max}{@html '&#176;'}
		</div>
	</div>

	<div class="stat">
		<div class="stat-figure text-secondary">
			<svg class="w-8 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
					d="M448 96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm64 0c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z" />
			</svg>
		</div>
		<div class="stat-title">Min Temp</div>
		<div class="stat-value text-2xl">
			{weatherData.main.temp_min}{@html '&#176;'}
		</div>
	</div>
</div>
