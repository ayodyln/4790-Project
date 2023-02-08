import adapter from '@sveltejs/adapter-vercel'
// import preprocess from 'svelte-preprocess'
const config = {
	kit: {
		adapter: adapter()
	}
	// preprocess: [
	// 	preprocess({
	// 		postcss: true
	// 	})
	// ]
}

export default config

// import adapter from '@sveltejs/adapter-static'

// // /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter({
// 			fallback: 'index.html'
// 		})
// 	},
// 	preprocess: [
// 		preprocess({
// 			postcss: true
// 		})
// 	]
// }

// export default config
