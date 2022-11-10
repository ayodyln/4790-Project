import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const defaultValue = {
	username: '',
	password: '',
	theme: '',
	avatar: '',
	bio: ''
}

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue
const avatarInit = browser ? window.localStorage.getItem('avatar') : ''
const usernameInit = browser ? window.localStorage.getItem('username') : ''
const userBioInit = browser ? window.localStorage.getItem('bio') : ''

// Had to create multiple stores for data that is imporant for a user to actually stay,
// even after page refresh/reload. Data wouldn't persist when I tried just accessed data
// from the user store object.
export const user = writable(initialValue)

export const avatar = writable(avatarInit)
export const username = writable(usernameInit)
export const userBio = writable(userBioInit)

user.subscribe((value) => {
	if (browser) window.localStorage.setItem('user', value)
})

avatar.subscribe((value) => {
	if (browser) window.localStorage.setItem('avatar', value)
})

username.subscribe((value) => {
	if (browser) window.localStorage.setItem('username', value)
})

userBio.subscribe((value) => {
	if (browser) window.localStorage.setItem('bio', value)
})

// ! Theme
const defaultTheme = 'dark'
const initTheme = browser ? window.localStorage.getItem('theme') : defaultTheme

export const theme = writable(initTheme)

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value)
	}
})
