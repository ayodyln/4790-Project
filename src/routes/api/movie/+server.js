import { KEY } from '$env/static/private';

let allMovies = [];

//! Reformat for pagination?

export const GET = async () => {
	let movieData;
	let searchTerms = 'Avengers';
	try {
		const apiAuth = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerms}`);
		movieData = await apiAuth.json();
		allMovies = await getAllMovies(movieData, searchTerms);
	} catch (error) {
		console.error(error);
	}

	return new Response(JSON.stringify({ movies: allMovies }), {
		headers: {
			'content-type': 'application/json',
			accept: 'application/json'
		}
	});
};

const getAllMovies = async (pageOne, searchTerms) => {
	let allTheMovies = [];

	// Converting total amount form string to int
	const totalResults = pageOne.totalResults * 1;

	if (totalResults === 0) {
		console.log('No Movie Data');
		return;
	}

	if (totalResults > 0 && totalResults < 11) {
		return pageOne.Search; // return just the array of the results
	}

	allTheMovies = [...pageOne.Search];

	// figure out how many times to loop
	let counter = Math.ceil(totalResults / 10);

	for (let i = 2; i <= counter; i++) {
		try {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=${KEY}&s=${searchTerms}&page=${i}`
			);
			const pageData = await response.json();
			allTheMovies = [...allTheMovies, ...pageData.Search];
		} catch (err) {
			console.error(err);
		}
	}

	return allTheMovies.filter((movie) => movie.Type === 'movie' && movie.Poster !== 'N/A');
};
