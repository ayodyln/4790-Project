<script>
	import { Storage } from 'aws-amplify'

	let image

	const storageHandler = async () => {
		if (!image) return
		try {
            console.log(image)
			const posted_file = await Storage.put(`images/${image.name}`, image)
			console.log(posted_file)
		} catch (error) {
			console.error(error)
		}
	}
</script>

<section class="flex flex-col gap-2 max-w-xs w-full">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img src={image ? URL.createObjectURL(image) : null} alt="my image" />

	<div class="form-control w-full max-w-xs">
		<label for="image" class="label">
			<span class="label-text">What is your name?</span>
		</label>
		<input
			on:change={(e) => {
				image = e.target.files[0]
			}}
			name="image"
			type="file"
			class=" w-full max-w-xs" />
	</div>

	<button class="btn" on:click={storageHandler}>Create S3 File</button>
</section>
