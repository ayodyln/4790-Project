import { MOVIE_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

export const actions = {
	movies: async ({ request }) => {
		const data = await request.formData()
		const searchTerms = data.get('searchTerms')
		try {
			const omdb_response = await fetch(
				`https://www.omdbapi.com/?apikey=${MOVIE_KEY}&s=${searchTerms}`
			)
			const movieData = await omdb_response.json()
			const allMovies = await getAllMovies(movieData, searchTerms)
			return allMovies
		} catch (err) {
			console.error(err)
			error('404', err)
		}
	},

	singleMovie: async ({ request }) => {
		const data = await request.formData()
		const movieID = data.get('MovieID')
		try {
			const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_KEY}&i=${movieID}`)
			const singleMoiveData = await omdb_response.json()
			return singleMoiveData
		} catch (err) {
			console.error(err)
		}
	}
}

// ! Fix the bug here, pageOne.Search isn't an itrable
async function getAllMovies(pageOne, searchTerms) {
	let allTheMovies = []
	const totalResults = parseInt(pageOne.totalResults)

	if (totalResults === 0) {
		console.error(`No Results`)
		return
	}

	if (totalResults > 0 && totalResults < 11) {
		return pageOne.Search // return just the array of the results
	}

	allTheMovies = [...pageOne.Search]

	// Thanks Thor for figuring out how to filter Movie Database :D
	let counter = Math.ceil(totalResults / 10)
	for (let i = 2; i <= counter; i++) {
		try {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${MOVIE_KEY}&s=${searchTerms}&page=${i}`
			)
			const pageData = await response.json()
			allTheMovies = [...allTheMovies, ...pageData.Search]
		} catch (err) {
			console.error(err)
		}
	}

	return allTheMovies.filter((movie) => movie.Type === 'movie' && movie.Poster !== 'N/A')
}
