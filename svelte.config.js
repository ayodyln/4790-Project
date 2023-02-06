import adapter from '@sveltejs/adapter-auto'
const config = {
	kit: {
		adapter: adapter({ out: 'build' })
	}
}
export default config

// import adapter from '@sveltejs/adapter-static'
// import preprocess from 'svelte-preprocess'

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
