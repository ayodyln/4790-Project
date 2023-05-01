import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const defaultValue = false

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue

export const user = writable(initialValue)

user.subscribe((value) => {
	if (browser) window.localStorage.setItem('user', value)
})

// ! Theme
const initTheme = browser ? window.localStorage.getItem('theme') : true
export const theme = writable(initTheme)
theme.subscribe((value) => {
	if (value === null) theme.set(true)

	if (browser) {
		window.localStorage.setItem('theme', value)
	}
})

export const localUser = writable('')
