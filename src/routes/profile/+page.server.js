import { MARVEL_KEY, MARVEL_PRIVATE_KEY } from '$env/static/private'
import md5 from 'md5'
// import { json, error } from '@sveltejs/kit'

export const actions = {
	getComic: async ({ request }) => {
		const data = await request.formData()
		const heroData = data.get('url')
		console.log(heroData)

		const ts = new Date().getTime()
		const hash = md5([ts, MARVEL_PRIVATE_KEY, MARVEL_KEY].join(''))

		try {
			const Marvel = await fetch(`${heroData}?ts=${ts}&apikey=${MARVEL_KEY}&hash=${hash}`)

			const marvel = await Marvel.json()

			return marvel
		} catch (error) {
			console.log(error)
		}
	}
}

// {
// 	modified: '2014-04-29T14:18:17-0400',
// 	thumbnail: {
// 		path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
// 		extension: 'jpg'
// 	},
// 	resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
//
// 	series: {
// 		available: 3,
// 		collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/series',
// 		items: [
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
// 				name: 'Avengers: The Initiative (2007 - 2010)'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/series/2005',
// 				name: 'Deadpool (1997 - 2002)'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
// 				name: 'Marvel Premiere (1972 - 1981)'
// 			}
// 		],
// 		returned: 3
// 	},
// 	stories: {
// 		available: 21,
// 		collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
// 		items: [
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
// 				name: 'Cover #19947',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
// 				name: 'The 3-D Man!',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
// 				name: 'Cover #19949',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
// 				name: "The Devil's Music!",
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
// 				name: 'Cover #19951',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
// 				name: 'Code-Name:  The Cold Warrior!',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
// 				name: 'AVENGERS: THE INITIATIVE (2007) #14',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
// 				name: 'Avengers: The Initiative (2007) #14 - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
// 				name: 'AVENGERS: THE INITIATIVE (2007) #15',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
// 				name: 'Avengers: The Initiative (2007) #15 - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
// 				name: 'AVENGERS: THE INITIATIVE (2007) #16',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
// 				name: 'Avengers: The Initiative (2007) #16 - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
// 				name: 'AVENGERS: THE INITIATIVE (2007) #17',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
// 				name: 'Avengers: The Initiative (2007) #17 - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
// 				name: 'AVENGERS: THE INITIATIVE (2007) #18',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
// 				name: 'Avengers: The Initiative (2007) #18 - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
// 				name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
// 				name: 'AVENGERS: THE INITIATIVE (2007) #19',
// 				type: 'cover'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
// 				name: 'Avengers: The Initiative (2007) #19 - Int',
// 				type: 'interiorStory'
// 			},
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
// 				name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
// 				type: 'interiorStory'
// 			}
// 		],
// 		returned: 20
// 	},
// 	events: {
// 		available: 1,
// 		collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
// 		items: [
// 			{
// 				resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
// 				name: 'Secret Invasion'
// 			}
// 		],
// 		returned: 1
// 	},
//
// }
