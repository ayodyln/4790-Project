import { DataStore, Predicates } from 'aws-amplify'
import { Comic } from '../../../../models'

export const queryMarvelDataBase = async () => {
	try {
		const marvel = await fetch('api/marvel')
		const MarvelComics = await marvel.json()
		const DATASTORE_COMICS = await DataStore.query(Comic)

		if (!MarvelComics) {
			return DATASTORE_COMICS
		} else {
			return await MarvelComics.marvel.map((char) => {
				char.thumbnail = `${char.thumbnail.path}.${char.thumbnail.extension}`
				return {
					...char,
					synced: DATASTORE_COMICS.find((c) => c.marvelID === char.id) ? true : false
				}
			})
		}
	} catch (error) {
		console.log(error)
	}
}

// COMICS === MARVEL CHARACTERS

export const DataStoreHandler = async (Char) => {
	Char.forEach(async (Char) => {
		if (Char.synced) return
		Char.synced = true
		try {
			await DataStore.save(
				new Comic({
					name: Char.name,
					marvelID: Char.id,
					description: Char.description,
					thumbnail: Char.thumbnail,
					synced: Char.synced
				})
			)
		} catch (error) {
			console.log(error)
		}
	})
	return [...Char]
}

export const NukeDataBase = async (Comics) => {
	await DataStore.delete(Comic, Predicates.ALL)
	Comics.forEach((c) => {
		c.synced = false
	})
	return [...Comics]
}

//! Fix Comics Naming convention
export const syncSingleComic = async ({ Characters, charID }) => {
	const myChar = await Characters.find((c) => c.id === charID)
	myChar.synced = true

	try {
		const data = await DataStore.save(
			new Comic({
				name: myChar.name,
				marvelID: myChar.id,
				description: myChar.description,
				thumbnail: myChar.thumbnail,
				synced: myChar.synced
			})
		)
		console.log(data)
	} catch (error) {
		console.log(error)
	}

	return [...Characters]
}

export const desyncSingleComic = async ({ Characters, charID }) => {
	const [singleAWSComic] = await DataStore.delete(Comic, (c) => c.marvelID.eq(charID))
	if (!singleAWSComic) return

	const updateComic = await Characters.find((comic) => comic.id === singleAWSComic.marvelID)
	updateComic.synced = false
	return [...Characters]
}
