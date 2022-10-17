import { MOVIE_KEY } from '$env/static/private';

export const GET = async (event) => {
	console.log(event);
	let movieData;
	try {
		const apiAuth = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_KEY}?i=${'tt6477680'}`);
		movieData = await apiAuth.json();
	} catch (error) {
		console.error(error);
	}

	return new Response(JSON.stringify({ movies: movieData }), {
		headers: {
			'content-type': 'application/json'
		}
	});
};
