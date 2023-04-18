<script>
	export let userData, editState, email, website
</script>

<div class="flex flex-col gap-4">
	<section id="Email" class="w-60">
		<span class="">
			<p class="font-bold">Email</p>
			<div class="divider m-0 h-fit mb-1" />
		</span>

		{#if editState}
			<input
				bind:value={email}
				type="email"
				placeholder={userData.email}
				class="input input-sm w-full" />
		{:else}
			<h2>{userData.email}</h2>
		{/if}
	</section>

	<section id="name" class="w-60">
		<span class="mb-2">
			<p class="font-bold">Website</p>
			<div class="divider m-0 h-fit mb-1" />
		</span>

		{#if editState}
			<input
				bind:value={website}
				type="text"
				placeholder={userData.website}
				class="input input-sm w-full" />
		{:else}
			<a class="link" target="_blank" rel="noreferrer" href={userData.website}
				>{userData.website}</a>
		{/if}
	</section>
</div>
