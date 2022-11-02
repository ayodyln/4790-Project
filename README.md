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

- [Auth Components & DOM events #1](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/Auth) - Since the front-end isn't connected to a back-end yet, I created a local array `database/user.js`. When the client renders the Auth page, they are presented with a UI that can update conditionally--depending if the user wants to sign in or sign up. Utilizing [SvelteKit Form Actions](https://kit.svelte.dev/docs/form-actions) for the user log in flow, if the user credentials provided are correct, the server will redirect the client to `/home`. Each component renders via a `on:click` event.
- [DOM Events #2 - Avatars](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - DOM events created to Create/Delete Avatars and update the DOM accordingly.
- [DOM Events #3 - Movies](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.svelte) - Custom Modal DOM event created. Utilizing **TailwindCSS/DaisyUI** for the design, I wired up the functionality to render the modal via the Svelte class toggle attribute (e.g., `class:modal-open={modalRender}`). Which conditionally updates this class on the html element via boolean values. There is also a `on:keyup` event on the modal, if the user opts to exit the modal via `esc` key.

## Recent Features for **_Section 3: Lifecycle function and Writable Stores_**:

- [Theme and User Data Store](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/lib/stores) - Added User and Theme stores, to update the website based upon user data and desired theme. Stores are updated upon login. Known Bug: data doesn't persist upon page reload.
- [onMount Example](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Added this feature to the Avatars page, even though the data loaded is very quick naturally, I had to mimic a API call via a timeout function. If were to do a fetch request here, it would still function as desired.
- [Weather App](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/weather) - Started a weather app dashboard. Currently figuring out how to layout the UI and intergrate a graph of somekind. The plan is to have widgets in the dashboard with accurate weather data and a option to see weather charts. Calling all data from OpenWeatherMapAPI.
