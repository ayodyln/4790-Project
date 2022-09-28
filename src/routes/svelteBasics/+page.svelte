<script>
	export let data;
	$: console.log(data);

	import RandomNumber from '../../lib/functions/numbers/RandomNumber';

	let count = 0;
	let sumNumberArr = [1, 2, 3];

	// Svelte Tutorial -> Reactivity: Declarations ✅
	$: countSquared = count ** 2;
	// Svelte Tutorial -> Reactivity: Statements ✅
	$: if (count >= 15) {
		console.log('Count Reset at 15.');
		count = 0;
	}

	// Svelte Tutorial -> Introduction: Your First Compontent; devName. ✅
	let randomData = RandomNumber(50);

	// Svelte Tutorial -> Reactivity: Assignments ✅
	const countHandler = (event) => {
		if (event.target.value === 'countUp') count += 1;
		else if (event.target.value === 'reset') count = 0;
	};

	const addNumber = () => (sumNumberArr = [...sumNumberArr, RandomNumber(100)]);

	// Svelte Tutorial -> Reactivity: Updating Arrays and Objects ✅
	$: sum = sumNumberArr.reduce((t, n) => t + n, 0);
	$: if (sumNumberArr.length > 10) {
		sumNumberArr = [1, 2, 3];
	}

	// Svelte Tutorial -> Logic: If Blocks ✅
	let profile = { loggedIn: false };
	const toggledState = () =>
		profile.loggedIn ? (profile.loggedIn = false) : (profile.loggedIn = true);
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

	<!-- * Svelte Tutorial -> Introduction: Your First Compontent; devName. ✅  -->
	<p>Random Num: {randomData}</p>

	<div>
		<!-- * Svelte Tutorial -> Reactivity: Updating Arrays and Objects ✅ -->
		<button on:click={addNumber}>Get Sum/Add Number</button>
		<p>{sumNumberArr.join(' + ')} = {sum}</p>
	</div>

	<!-- * Svelte Tutorial -> Logic: If Blocks ✅ -->
	{#if profile.loggedIn}
		<button on:click={toggledState}> Sign Out </button>
		<!-- * Svelte Tutorial -> Logic: Else If Blocks ✅ -->
	{:else if profile.loggedIn === null}
		<button on:click={toggledState}>Null</button>
		<!-- * Svelte Tutorial -> Logic: Else Blocks ✅ -->
	{:else}
		<button on:click={toggledState}> Sign In </button>
	{/if}
</main>

<style>
</style>
