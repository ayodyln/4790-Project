import { writable } from 'svelte/store'
import { browser } from '$app/environment'

const defaultValue = {
	username: '',
	password: '',
	theme: '',
	avatar: ''
}

const initialValue = browser ? window.localStorage.getItem('user') : defaultValue
const avatarInit = browser ? window.localStorage.getItem('avatar') : defaultValue

export const user = writable(initialValue)
export const avatar = writable(avatarInit)

user.subscribe((value) => {
	if (browser) window.localStorage.setItem('user', value)
})

avatar.subscribe((value) => {
	if (browser) window.localStorage.setItem('avatar', value)
})
