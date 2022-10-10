<script>
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { FY2021 as satisfactionData2021 } from '$lib/data/data.stats.json';
	import { Chart, registerables } from 'chart.js';
	import { onMount } from 'svelte';
	import WeatherStats from '../../lib/components/weather/WeatherStats.svelte';

	export let data;
	$: weatherData = data.weatherData;
	$: console.log(weatherData);
	Chart.register(...registerables);

	let barChartElement;

	function onSubmitHandler(e) {}

	const chartData = {
		labels: satisfactionData2021.map(({ framework }) => framework),
		datasets: [
			{
				label: 'Satisfaction (%)',
				data: satisfactionData2021.map(({ score }) => score),
				backgroundColor: [
					'hsl(347 38% 49%)',
					'hsl(346 65% 63%)',
					'hsl(346 49% 56%)',
					'hsl(346 89% 70%)',
					'hsl(346 90% 76%)',
					'hsl(346 90% 73%)',
					'hsl(346 89% 79%)',
					'hsl(346 89% 85%)',
					'hsl(347 89% 82%)',
					'hsl(346 90% 88%)',
					'hsl(347 87% 94%)',
					'hsl(347 91% 91%)',
					'hsl(346 87% 97%)'
				],
				borderColor: ['hsl(43 100% 52%)'],
				borderRadius: 4,
				borderWidth: 2
			}
		]
	};

	onMount(() => {
		if (browser) {
			new Chart(barChartElement, {
				type: 'bar',
				data: chartData,
				options: {
					plugins: {
						legend: {
							display: false
						}
					},

					scales: {
						x: {
							grid: {
								color: 'hsl(43 100% 52% / 10%)'
							},
							ticks: { color: 'hsl(43 100% 52% )' }
						},

						y: {
							beginAtZero: false,
							ticks: { color: 'hsl(43 100% 52% )', font: { size: 18 } },
							grid: {
								color: 'hsl(43 100% 52% / 40%)'
							},
							title: {
								display: true,
								text: 'Satisfaction (%)',
								color: 'hsl(43 100% 52% )',
								font: { size: 24, family: 'Merriweather' }
							}
						}
					}
				}
			});
		}
	});
</script>

<main class="main-container h-full p-6 flex flex-col gap-4">
	<div class="flex w-full justify-between items-center">
		<h1 class="text-2xl">Weather APP Dashboard</h1>
		<form method="POST" action="/weather" on:submit={onSubmitHandler} use:enhance>
			<div class="form-control">
				<div class="input-group">
					<input
						class="input input-bordered input-md"
						type="search"
						name="searchTerms"
						placeholder="Search for a town..."
					/>

					<button class="btn btn-square" type="submit">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/></svg
						>
					</button>
				</div>
			</div>
		</form>
	</div>

	<section class="h-full w-full bg-base-200 p-2 rounded-lg">
		<WeatherStats />
	</section>
</main>

<!-- <section class="flex justify-center items-center w-3/4 self-center">
	<canvas bind:this={barChartElement} />
</section> -->
