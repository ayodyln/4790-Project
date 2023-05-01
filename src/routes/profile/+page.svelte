<script>
	import UserBio from '../../lib/components/profile/UserBio.svelte'
	import MyHeroes from '../../lib/components/profile/MyHeroes.svelte'
	import { theme } from '$lib/stores/stores'

	let activeTab = 'heroes'

	const tabHandler = (e) => {
		const id = e.target.dataset.id
		activeTab = id
	}
</script>

<section
	class="max-w-4xl w-full max-h-[650px] h-full m-auto flex mt-4 bg-base-300 rounded-3xl overflow-hidden">
	<!-- User Page -->
	<UserBio />

	<section
		id="editable_data"
		class="flex flex-col w-full h-full bg-base-200 rounded-r-3xl p-4 drop-shadow-lg">
		<div class="tabs h-fit">
			<button
				on:click={tabHandler}
				data-id="heroes"
				class:tab-active={activeTab === 'heroes'}
				class="tab tab-lifted">My Heroes</button>
		</div>

		<section
			class="h-full overflow-hidden rounded-xl rounded-tl-none {activeTab && 'border'} {$theme
				? 'border-[#e5e6e6]'
				: 'border-[#20252e]'}">
			<MyHeroes />
		</section>
	</section>
</section>
