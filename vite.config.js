import { sveltekit } from '@sveltejs/kit/vite'

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['chart.js']
	},
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser'
		}
	}
}

export default config
