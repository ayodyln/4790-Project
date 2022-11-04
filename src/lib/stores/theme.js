import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const defaultValue = 'emerald'
const initialValue = browser ? window.localStorage.getItem('theme') : defaultValue

export const theme = writable(initialValue)

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value)
	}
})
