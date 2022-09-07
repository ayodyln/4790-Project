<script>
	export let data;
	$: console.log(data);

	import RandomNumber from '../../lib/functions/numbers/RandomNumber';

	let count = 0;

	// Svelte Tutorial -> Reactivity: Declarations ✅
	$: countSquared = count ** 2;

	// Svelte Tutorial -> Reactivity: Assignments ✅
	const countHandler = (event) => {
		if (event.target.value === 'countUp') count += 1;
		else if (event.target.value === 'reset') count = 0;
	};

	const addNumber = () => (sumNumberArr = [...sumNumberArr, RandomNumber(100)]);
</script>

<main>
	<div class="buttonsWrapper">
		<!-- * Svelte Tutorial -> Reactivity: Assignments ✅ -->
		<button on:click={countHandler} value="countUp" class="btn btn-ghost">
			Counter {count}
			{count === 1 ? 'time' : 'times'}
		</button>
		<button value="reset" on:click={countHandler} class="btn btn-ghost"> Reset Counter </button>

		<!-- * Svelte Tutorial -> Reactivity: Declarations ✅ -->
		<p>Normal Counted: {count}, SquaredCount: {countSquared}</p>
	</div>
</main>

<style>
</style>
