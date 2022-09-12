<script>
	import EmailSvg from './components/EmailSVG.svelte';
	import PhoneSvg from './components/PhoneSVG.svelte';
	import UserSvg from './components/UserSVG.svelte';

	export let data;
	// Svelte Tutorial -> Props: Default Values ✅
	export let defaultName = data.name;
</script>

<main>
	<div class="charDiv bg-current shadow-xl rounded-xl glas">
		<img src={data.charImage} alt={data.name} />
		<div>
			<h2 class="card-title text-primary">{defaultName}</h2>
			<div class="charInfo card bg-primary shadow-xl glass">
				<p>
					<span>
						<UserSvg />
					</span>
					{data.title}
				</p>
				<p>
					<span>
						<PhoneSvg />
					</span>
					Phone: {data.phone}
				</p>
				<p>
					<span>
						<EmailSvg />
					</span>
					Email: {data.email}
				</p>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.charDiv {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em;
	}

	img {
		width: 20em;
	}

	div > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.charInfo {
		padding: 1em;
		align-items: unset;
		gap: 1.5em;
	}

	p {
		display: flex;
		align-items: center;
		gap: 8px;
		/* justify-content: center; */
	}

	span {
		width: 10%;
	}
</style>
