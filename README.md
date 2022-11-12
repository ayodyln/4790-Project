# SvelteKit Class Project

Live Website: https://dgm3790-sveltekit.vercel.app/

This is my introduction to the SvelteKit framework for DGM 3790 (Utah Valley University). The end goal is for this to become a full stack web app that demonstrates my comprehension of the framework.

### APIs:

- [Faker API](https://fakerjs.dev/)
- [Movie API](https://www.omdbapi.com/)
- [Weather API](https://openweathermap.org/api)
- [NASA API(s)](https://api.nasa.gov/)

---

## Recent Features: **_Motions, Transitions, and Animations_**

- Svelte Tweening ([Example 1](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte), [Example 2](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/loadingPage/LoadingPage.svelte), [Example 3](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/weather/CurrentWeather/Forcast.svelte)) - The concept of tweening is implementing an animation between two states (e.g., keyframes). For Svelte, they offer a tweening tool that I've implemented accross site that helps with user feedback. Such as between page loads or data fetching.
- Transitions ([Example 1](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte), [Example 2](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte), [Example 3](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%5Bprofile%5D/%2Bpage.svelte)) - Svelte offers directives that enable a developer to _transition_ a DOM element. For example, I've added `transition:fade` to some of the elements as seen in the examples. Which fades elements in or out on page load or state changes. I'm also useing `transition:fly`, along with transition event listners to trigger new events once another has finished.
- [Animations](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Svelte can trigger animations on elments as well. Simple example is see on Avatars page when you click on the "X" button in the top right of the cards, which shifts the looped list on DOM. Adding some level of character to the page. Levels of animtion can vary, however a simple default example was achieved on this site by simply adding `animate:flip={{duration: 100}}` to each card.

<br>

### Features:

- **_Events and Bindings_**
  - [Auth Components & DOM events #1](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/Auth) - Since the front-end isn't connected to a back-end yet, I created a local array `database/user.js`. When the client renders the Auth page, they are presented with a UI that can update conditionally--depending if the user wants to sign in or sign up. Utilizing [SvelteKit Form Actions](https://kit.svelte.dev/docs/form-actions) for the user log in flow, if the user credentials provided are correct, the server will redirect the client to `/home`. Each component renders via a `on:click` event.
  - [DOM Events #2 - Avatars](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - DOM events created to Create/Delete Avatars and update the DOM accordingly.
  - [DOM Events #3 - Movies](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.svelte) - Custom Modal DOM event created. Utilizing **TailwindCSS/DaisyUI** for the design, I wired up the functionality to render the modal via the Svelte class toggle attribute (e.g., `class:modal-open={modalRender}`). Which conditionally updates this class on the html element via boolean values. There is also a `on:keyup` event on the modal, if the user opts to exit the modal via `esc` key.

<br>

- **_Lifecycle function and Writable Stores_**
  - [Theme and User Data Store](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/lib/stores) - Added User and Theme stores, to update the website based upon user data and desired theme. Stores are updated upon login. Known Bug: data doesn't persist upon page reload.
  - [onMount Example](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Added this feature to the Avatars page, even though the data loaded is very quick naturally, I had to mimic a API call via a timeout function. If were to do a fetch request here, it would still function as desired.
  - [Weather App](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/weather) - Started a weather app dashboard. Currently figuring out how to layout the UI and intergrate a graph of somekind. The plan is to have widgets in the dashboard with accurate weather data and a option to see weather charts. Calling all data from OpenWeatherMapAPI.
