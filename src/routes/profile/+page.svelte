<script>
	import { user } from '$lib/stores/stores'
	import { onMount } from 'svelte'
	import UserBio from '../../lib/components/profile/UserBio.svelte'

	onMount(() => {
		// console.log(JSON.parse($user))
	})
</script>

<section class="max-w-4xl w-full h-1/2 m-auto flex mt-4 bg-base-300 rounded-3xl overflow-hidden">
	<!-- User Page -->
	<UserBio />

	<section
		id="editable_data"
		class="flex flex-col w-full h-full justify-between bg-base-200 rounded-r-3xl p-4 drop-shadow-lg">
		<div class="w-fit">
			<ul id="personal_actions" class="w-full">
				<li>
					<button class="btn w-full">My Comics</button>
				</li>
			</ul>
		</div>
	</section>
</section>
