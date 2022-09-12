import { KEY } from '$env/static/private';

let allMovies = [];

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

	return new Response(JSON.stringify({ movies: movieData }), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};

const getAllMovies = async (pageOne, searchTerms) => {
	let allMoviesLocal = [];
	const totalMovieCount = pageOne.totalResults * 1

	console.log(totalMovieCount)
};
