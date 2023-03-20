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
			return await MarvelComics.marvel.data.results.map((comic) => {
				return {
					title: comic.title,
					marvelID: comic.id,
					description: comic.description,
					pageCount: comic.pageCount,
					thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
					synced: DATASTORE_COMICS.find((c) => c.marvelID === comic.id) ? true : false
				}
			})
		}
	} catch (error) {
		console.log(error)
	}
}

export const DataStoreHandler = async (Comics) => {
	Comics.forEach(async (comic) => {
		if (comic.synced) return
		comic.synced = true
		try {
			await DataStore.save(new Comic(comic))
		} catch (error) {
			console.log(error)
		}
	})
	return [...Comics]
}

export const NukeDataBase = async (Comics) => {
	await DataStore.delete(Comic, Predicates.ALL)
	Comics.forEach((c) => {
		c.synced = false
	})
	return [...Comics]
}

export const syncSingleComic = async ({ Comics, comic_id }) => {
	const myComic = await Comics.find((c) => c.marvelID === comic_id)
	myComic.synced = true

	try {
		await DataStore.save(new Comic(myComic))
	} catch (error) {
		console.log(error)
	}

	return [...Comics]
}

export const desyncSingleComic = async ({ Comics, comic_id }) => {
	const [singleAWSComic] = await DataStore.delete(Comic, (c) => c.marvelID.eq(comic_id))
	if (!singleAWSComic) return

	const updateComic = await Comics.find((comic) => comic.marvelID === singleAWSComic.marvelID)
	updateComic.synced = false
	return [...Comics]
}
