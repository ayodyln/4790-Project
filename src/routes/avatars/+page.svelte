<script>
	import RandomNumber from '../../lib/functions/numbers/RandomNumber';
	import Avatar from './components/Avatar.svelte';

	// Data is a prop
	export let data;

	let count = 0;
	let addedAvatars = [];
	let sumNumberArr = [1, 2, 3];

	// Reactive data, since the data we are getting from ./+page.ts is a async load function.
	$: {
		console.log(`%c[faker-js] %cFetching Data...`, 'color: cyan', 'color: white');
	}
	// Svelte Tutorial -> Reactivity: Declarations ✅
	$: countSquared = count ** 2;
	// Svelte Tutorial -> Reactivity: Statements ✅
	$: if (count >= 15) {
		console.log('Count Reset at 15.');
		count = 0;
	}

	// Svelte Tutorial -> Reactivity: Updating Arrays and Objects ✅
	$: sum = sumNumberArr.reduce((t, n) => t + n, 0);
	$: if (sumNumberArr.length > 10) {
		sumNumberArr = [1, 2, 3];
	}

	// Svelte Tutorial -> Introduction: HTML tags ✅
	const pageTitle = `<i>Avatars Page</i>`;
	// Svelte Tutorial -> Introduction: Your First Compontent; devName. ✅
	let devName = RandomNumber(data.fakerData.length + 1);
	// Svelte Tutorial -> Reactivity: Assignments ✅
	const countHandler = (event) => {
		if (event.target.value === 'countUp') count += 1;
		else if (event.target.value === 'reset') count = 0;
	};

	const addAvatar = (event) => {
		addedAvatars = [...addedAvatars, data.singleFakeData];
		console.log(addedAvatars);
	};

	const addNumber = () => (sumNumberArr = [...sumNumberArr, RandomNumber(100)]);
</script>

<main>
	<h1 class="text-4xl font-bold underline">Hello world!</h1>

	<div class="card card-compact w-96 bg-base-100 shadow-xl">
		<div class="card-body">
			<h2 class="card-title">Shoes!</h2>
			<p>If a dog chews shoes whose shoes does he choose?</p>
		</div>
	</div>

	<!-- * Svelte Tutorial -> Introduction: HTML tags ✅ -->
	<h1>{@html pageTitle}</h1>

	<div class="buttonsWrapper">
		<!-- * Svelte Tutorial -> Reactivity: Assignments ✅ -->
		<button on:click={countHandler} value="countUp">
			Counter {count}
			{count === 1 ? 'time' : 'times'}
		</button>
		<button value="reset" on:click={countHandler}> Reset Counter </button>

		<!-- * Svelte Tutorial -> Reactivity: Declarations ✅ -->
		<p>Normal Counted: {count}, SquaredCount: {countSquared}</p>
	</div>

	<div>
		<button on:click={addAvatar}>Get Avatar</button>
		<div>
			<!-- * Svelte Tutorial -> Reactivity: Updating Arrays and Objects ✅ -->
			<button on:click={addNumber}>Get Sum/Add Number</button>
			<p>{sumNumberArr.join(' + ')} = {sum}</p>
		</div>
	</div>

	<!-- * Svelte Tutorial -> Introduction: Your First Compontent; devName. ✅  -->
	<p>Random Name: {data.fakerData[devName].name.toUpperCase()}</p>

	<!-- * Svelte Tutorial -> Logic: Each Blocks ✅ -->
	<!-- * Svelte Tutorial -> Logic: Keyed each blocks ✅ -->
	{#each data.fakerData as data (data.name)}
		<!-- * Svelte Tutorial -> Introduction: Nested Components ✅  -->
		<!-- *  Svelte Tutorial -> Props: Declaring Props ✅ -->

		<a href={`/avatars/${data.name}`}>
			<!-- * Svelte Tutorial -> Props: Spread Props ✅ -->
			<Avatar {...data} />
		</a>
	{/each}
</main>

<!-- * Svelte Tutorial -> Introduction: Styling ✅  -->
<style>
	.buttonsWrapper {
		display: flex;
		gap: 8px;
		background-color: grey;
		justify-content: center;
		padding: 8px;
	}
	.buttonsWrapper > button {
		cursor: pointer;
	}
</style>
