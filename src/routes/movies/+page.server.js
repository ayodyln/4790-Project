import { KEY } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const searchTerms = data.get('searchTerms');
		console.log(searchTerms);
		try {
			const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerms}`);
			console.log(omdb_response);
			const movieData = await omdb_response.json();
			const allMovies = await getAllMovies(movieData, searchTerms);
			console.log(allMovies);
			return allMovies;
		} catch (err) {
			console.error(err);
		}
	}
};

async function getAllMovies(pageOne, searchTerms) {
	let allTheMovies = [];
	const totalResults = pageOne.totalResults * 1;
	if (totalResults === 0) return; // should probably let user know "No results"
	if (totalResults > 0 && totalResults < 11) {
		return pageOne.Search; // return just the array of the results
	}
	allTheMovies = [...pageOne.Search];
	// figure out how many times to loop
	let counter = Math.ceil(totalResults / 10);
	for (let i = 2; i <= counter; i++) {
		try {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}&page=${i}`
			);
			const pageData = await response.json();
			console.log(pageData);
			allTheMovies = [...allTheMovies, ...pageData.Search];
		} catch (err) {
			console.error(err);
		}
	}
	return allTheMovies.filter((movie) => movie.Type === 'movie' && movie.Poster !== 'N/A');
}
