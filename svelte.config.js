import { adapter } from 'sveltekit-adapter-aws'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			autoDeploy: true
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}
// kit: {
// 	adapter: adapter()
// },
// preprocess: [
// 	preprocess({
// 		postcss: true
// 	})
// ]

export default config
