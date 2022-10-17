<script>
	export let modalTrue, movieData, modalClose;
</script>

<div class="modal {modalTrue}" on:click={modalClose} on:keyup={modalClose}>
	<div class="modal-box w-11/12 max-w-5xl">
		<h3 class="font-bold text-lg">{movieData.Title} ({movieData.Year})</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<button for="my-modal-5" class="btn modalButton">Close</button>
		</div>
	</div>
</div>
