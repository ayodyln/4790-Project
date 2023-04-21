<script>
	export let userData, image, localImage
</script>

<div
	class="form-control rounded-full w-40 hover:ring ring-primary hover:ring-2 {localImage
		? 'ring-success ring-2'
		: ''}">
	<label for="newProfilePic" class="input-group h-full">
		<div class="relative flex justify-center items-center w-full h-full4">
			<div
				class="bg-neutral bg-opacity-[70%] absolute z-1 w-full h-full flex justify-center items-center fill-base-100 hover:fill-base-300 cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-1/3" viewBox="0 0 512 512">
					<!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
					<path
						d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
				</svg>
			</div>

			<img
				src={!localImage ? userData.picture : URL.createObjectURL(localImage)}
				alt={userData.name} />
		</div>
		<input
			bind:this={image}
			id="newProfilePic"
			name="newProfilePic"
			type="file"
			hidden
			accept=".jpg, .png, .gif"
			on:change={(e) => {
				localImage = e.target.files[0]
			}} />
	</label>
</div>
