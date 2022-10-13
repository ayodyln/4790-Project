<script>
	import { goto } from '$app/navigation';

	export let name, image, avatarArray;

	function goToHandler(e) {
		console.log(e.target);
		goto(`/avatars/${name}`);
	}

	function deleteAvatar(event) {
		event.stopPropagation();
		console.log(event);
	}
</script>

<button on:click={goToHandler} class="basis-72" data-name={'name'}>
	<div class="card bg-base-300 shadow-xl hover:ring-4 ring-primary ring-inset hover:drop-shadow-lg">
		<div class="card-body p-2 h-full w-full gap-2">
			<div class="h-1/4 w-full flex justify-end p-2">
				<button class="btn btn-circle" on:click={deleteAvatar}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/></svg
					>
				</button>
			</div>
			<div class="flex w-44 h-44 sm:w-full">
				<img src={image} alt={name} class="w-full h-full" />
			</div>
			<div class="h-12 flex justify-center items-center">
				<h3 class="text-lg w-full text-center">{name}</h3>
			</div>
		</div>
	</div>
</button>
