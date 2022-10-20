# SvelteKit Class Project

Live Website: https://dgm3790-sveltekit.vercel.app/

This is my introduction to the SvelteKit framework for DGM 3790 (Utah Valley University). The end goal is for this to become a full stack web app that demonstrates my comprehension of the framework.

### APIs:

- [Faker API](https://fakerjs.dev/)
- [Movie API](https://www.omdbapi.com/)
- [Weather API](https://openweathermap.org/api)
- [NASA API(s)](https://api.nasa.gov/)

---

## Recent Features for **_Section 2: Events and Bindings_**:

- [Auth Components](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/Auth) - Since the front-end isn't connected to a back-end yet, I created a local array `database/user.js`. When the client renders the Auth page, they are presented with a UI that can update conditionally--depending if the user wants to sign in or sign up. Utilizing [SvelteKit Form Actions](https://kit.svelte.dev/docs/form-actions) for the user log in flow, if the user credentials provided are correct, the server will redirect the client to `/home`. 
- [DOM Events #1 - Avatars](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - DOM events created to Create/Delete Avatars and update the DOM accordingly.
- [DOM Events #2 - Movies](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.svelte) - Custom Modal DOM event created. Utilizing __TailwindCSS/DaisyUI__ for the design, I wired up the functionality to 