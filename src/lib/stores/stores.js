import { browser } from '$app/environment'
import { writable } from 'svelte/store'

const defaultValue = JSON.stringify({
	username: '',
	theme: '',
	avatar: '',
	bio: ''
})

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue

export const user = writable(initialValue)

user.subscribe((value) => {
	if (browser) window.localStorage.setItem('user', value)
})

// ! Theme
const defaultTheme = 'light'
const initTheme = browser ? window.localStorage.getItem('theme') : defaultTheme

export const theme = writable(initTheme)

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value)
	}
})
