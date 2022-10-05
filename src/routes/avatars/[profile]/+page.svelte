<script>
	import EmailSvg from './components/EmailSVG.svelte';
	import PhoneSvg from './components/PhoneSVG.svelte';
	import UserSvg from './components/UserSVG.svelte';

	export let data;
	export let defaultName = data.name;
</script>

<div class="flex justify-center items-center h-full w-full">
	<div class="card max-w-md w-1/3 h-fit bg-base-300">
		<div class="card-body items-center justify-center gap-12">
			<div class="w-full flex flex-col justify-center items-center bg-base-200 p-2 rounded-xl">
				<img src={data.charImage} alt={data.name} class="w-3/4 drop-shadow-lg" />
				<h2 class="">{defaultName}</h2>
			</div>

			<div class="flex flex-col w-full gap-4">
				<p class="flex items-center gap-2">
					<span class="h-auto w-8 flex justify-center items-center">
						<UserSvg />
					</span>
					<span class="full text-sm">
						{data.title}
					</span>
				</p>
				<p class="flex items-center gap-2">
					<span class="h-auto w-8 flex justify-center items-center">
						<PhoneSvg />
					</span>
					<span class="w-full text-sm">
						Phone: {data.phone}
					</span>
				</p>
				<p class="flex items-center gap-2">
					<span class="h-auto w-8 flex justify-center items-center">
						<EmailSvg />
					</span>
					<span class="w-full text-sm">
						Email: {data.email}
					</span>
				</p>
			</div>
		</div>
	</div>
</div>
