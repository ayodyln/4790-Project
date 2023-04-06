import { DataStore, Predicates } from 'aws-amplify'
import { Comic } from '../../../../models'

export const queryMarvelDataBase = async () => {
	try {
		const marvel = await fetch('api/marvel')
		const marvel_response = await marvel.json()
		return marvel_response.marvel
	} catch (error) {
		console.log(error)
	}
}

export const saveAllCharacters = async (characters) => {
	characters.forEach(async (char) => {
		try {
			await DataStore.save(
				new Comic({
					name: char.name,
					marvelID: char.id,
					description: char.description,
					thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`
				})
			)
		} catch (error) {
			console.log(error)
		}
	})
}

export const NukeDataBase = async () => await DataStore.delete(Comic, Predicates.ALL)

export const saveComic = async (char) => {
	try {
		await DataStore.save(
			new Comic({
				name: char.name,
				marvelID: char.id,
				description: char.description,
				thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`
			})
		)
	} catch (error) {
		console.error(error)
	}
}

export const deleteComic = async (char) => {
	const [comic] = await DataStore.query(Comic, (c) => c.marvelID.eq(char.id))
	await DataStore.delete(comic)
}
