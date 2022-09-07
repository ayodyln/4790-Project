import { KEY } from '$env/static/private';

export const GET = async () => {
	let movieData;
	try {
		const apiAuth = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=Avengers`);
		movieData = await apiAuth.json();
	} catch (error) {
		console.error(error);
	}

	return new Response(JSON.stringify({ movies: movieData }), {
		headers: {
			'content-type': 'application/json; charset=utf-8'
		}
	});
};
