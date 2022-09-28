export const load = async ({ fetch }) => {
	const res = await fetch('/api/movie');
	if (res.ok) return res.json();
	throw error(400, 'Movie Not Found');
};
