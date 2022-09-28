<script>
	export let data;
	$: console.log(data);

	import RandomNumber from '../../lib/functions/numbers/RandomNumber';

	let count = 0;
	let sumNumberArr = [1, 2, 3];

	// Svelte Tutorial -> Reactivity: Assignments ✅
	const countHandler = (event) => {
		if (event.target.value === 'countUp') count += 1;
		else if (event.target.value === 'reset') count = 0;
	};

	const addNumber = () => (sumNumberArr = [...sumNumberArr, RandomNumber(100)]);

	// Svelte Tutorial -> Logic: If Blocks ✅
	let profile = { loggedIn: false };
	const toggledState = () =>
		profile.loggedIn ? (profile.loggedIn = false) : (profile.loggedIn = true);
</script>

<div>
	<div class="buttonsWrapper">
		<!-- * Svelte Tutorial -> Reactivity: Assignments ✅ -->
		<button on:click={countHandler} value="countUp" class="btn btn-ghost">
			Counter {count}
			{count === 1 ? 'time' : 'times'}
		</button>
		<button value="reset" on:click={countHandler} class="btn btn-ghost"> Reset Counter </button>
	</div>

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
</div>

<style>
</style>
