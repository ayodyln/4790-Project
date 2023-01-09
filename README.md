# [SvelteKit Project](https://dgm3790-sveltekit.vercel.app/)

This project is meant to demonstrate the capabilities of SvelteKit and my ability to effectively use the framework. Currently, the framework is gearing up to transition out of the Beta phase into the official 1.0 launch. Everything that has been used in this project has been current techniques and tools of the framework. The primary goal of the app is to have a user `Sign In` and interact with multiple pages that connect to APIs, then renders data on the page for a user to interact with. 4790 Project.

### APIs Used:

- [Faker API](https://fakerjs.dev/)
- [Movie API](https://www.omdbapi.com/)
- [Weather API](https://openweathermap.org/api)
- [NASA API(s)](https://api.nasa.gov/)

<br>

# Key Features

- ## **[Routes](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes)** -

  SvelteKit runs off of a _`filesystem-based router`_ and pages will be stored in the directory **`src/routes`**. Each page that is created will be stored in this directory of the SvelteKit app. Files that are named `+page.svelte` are the root files that Vite will compile to something akin to `index.html`. For example, **`src/routes/+page.svelte`** is our **Home Page**. Other files such as `+server.js, +page.server.js, +layout.js` are all files that handled data and UI for a given page's directory. Learn more at the [SvleteKit Docs](https://kit.svelte.dev/docs/routing).

  The pages that were built for this web-app are corresponding to some of the [APIs](#apis-used) being used.

  ### **[Dynamic Routing](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/avatars)**:

  SvelteKit offers Dynamic Routing, which is useful to render custom pages to the client. Based on the data that is being requested by the user. Folders with the naming convention of brackets around the folder name, `src/routes/avatar/[profile]/+page.svelte`.

  The Avatars page renders a list of avatars and randomized data tied to each one. This is done by using the [Faker API](#apis-used). When you click on one of the [`Avatar Cards`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) on the page, it will route you to the dynamic folder within the Avatars folder, and render more data that is specific to the Avatar.

<br>

- ## **Authorization** -

  Albeit authorization is still being fine-tuned, currently the web app is configured to connect to AWS Amplify Cognito services. When a user logs in, a cookie is set that is named sessionID, and if it's containing a value/exists a user is authorized to interact with the APIs I'm using in the application.

  Each page in `src/routes` has a `+page.server.js`, and each one has load functions that check for the cookie named `sessionID`, to validate if a user is logged in. Still a work in progress.

  **Examples**:

  - [Creating, Signing Up and Login Users](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/Auth/%2Bpage.server.js)
  - [Page Load Function Example - APOD Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/apod/%2Bpage.server.js)

<br>

- ## **Svelte Conditional Logic** -

  Svelte lets you conditionally render UI to the DOM. On top of using SvelteKit serverside capabilities, it lets a developer build an interactive UI experience. For this project, I used conditional logic everywhere, a prime example is on my [`Avatars Page`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte), specifically with the custom component [`StatusMsg`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/Avatar/StatusMsg.svelte).

  The `StatusMsg` svelte component, is used on the avatars page. This component takes the prop `toggleAlert`. Depending on user actions on the Avatar page (e.g., creating or deleting avatars, and handling errors). Depending on what the value of `toggleAlert` is exactly equal to, it will render a DaisyUI alert box. Which `flys` in and then `fades` out after a set time, this is accomplished with Svelte Transitions.

  _**Other Examples:**_

  - [Weather Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte)
  - [Weather Icons](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/weather/CurrentWeather/WeatherIcon.svelte)
  - [Movies Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.svelte)
  - [APOD Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/apod/%2Bpage.svelte)
  - [Auth Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/Auth/%2Bpage.svelte)
  - [SignUp Component](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/AuthComponent/SignUp/SignUp.svelte)

<br>

- ## **Array Methods (Svelte & Javascript)** -

  Svelte has an important native method [`{#each ...}`](https://svelte.dev/docs#template-syntax-each), which is useful for looping through data and rendering relevant info to the UI. Examples of this in my application can be found at [Avatars Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte), [Movies Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.svelte), [APOD Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/apod/%2Bpage.svelte), [Forcast Component](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/weather/CurrentWeather/Forcast.svelte), and [Movies Modal](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/MovieModal/MovieModal.svelte).

  Since SvelteKit is a Javascript framework, enables me to use array methods to manipulate data even more. My Weather page is pulling data from an API, and it is a lot of filtering through and manipulation. So, when you got to the weather page, the server runs the necessary `Fetch` calls and also manipulates data to conform to the application's UI. The server file can be found here [`src/routes/weather/+page.server.js`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.server.js).

  Below is an example of me searching a Forcast Array and finding the max temperature in a given day, finding the corresponding data object with that `maxTemp`, and pushing it into a forecast array that is sorted and conforms to UI constraints.

  #### **Array Method Example**

  ```JS
  const renderForcastSample = async (dayArray) => {
  	let forcastList = []

  	dayArray.forEach((day) => {
  		const maxTemp = Math.max(...day.map((data) => data.main.temp))
  		const sample = day.find((d) => d.main.temp === maxTemp)
  		forcastList.push(sample)
  	})

  	// Sorting days by time stamp
  	return forcastList.sort((a, b) => a.dt - b.dt)
  }
  ```

  _**Other Examples:**_

  - [Movies](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.server.js)
  - [Avatars](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.server.js)

<br>

- ## **[Svelte Events](https://svelte.dev/docs#template-syntax-element-directives)** -

  User interactions are key to bringing an application to life. There are multiple instances in that I used the native `on:click` element directive on my components. Many directives let you add event listeners to elements, then you can use Javascript to make those events custom.

  ### Examples:

  - [Avatars Page - Avatar Creation and Deletion](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte)
  - [Profile Page - Theme Changer](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/profile/%2Bpage.svelte)
  - [Movie Modal](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/MovieModal/MovieModal.svelte)
  - [Landing Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/%2Bpage.svelte)
  - [APOD Drawer Options](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte)

<br>

- ## **Forms and Form Actions** -

  Forms are integral to how users can send data to the server, often developers use Javascript to _wire_ up a form's UI. Then utilizing the Fetch API to send data. With SvelteKit, you are using Forms how they were meant to be used but can be enhanced with Javascript by using the `use:enhance` directive on forms.

  The [Auth Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/Auth/%2Bpage.svelte) is the first instance of the user interacting with forms. To sign in, a user must interact with [Sign In Form](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/AuthComponent/SignIn/SignIn.svelte). I'm _loosely_ connecting to AWS Cognito services, and signing a user in this way. The goal is to access the stored data of a user and place them into SvelteKit stores. The [Sign Up Form](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/AuthComponent/SignUp/SignUp.svelte) is more complex since I'm using inputs for _name, email, password, profile picture, and a textarea for user's bio_.

<br>

- ## **Lifecycle function and Writable Stores**
  - [Theme and User Data Store](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/lib/stores) - Added User and Theme stores, to update the website based upon user data and desired theme. Stores are updated upon login.
  - [onMount Example](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Added this feature to the Avatars page, even though the data loaded is very quick naturally, I had to mimic a API call via a timeout function. If were to do a fetch request here, it would still function as desired.
  - [Weather App](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/weather) - Started a weather app dashboard. Currently figuring out how to layout the UI and intergrate a graph of somekind. The plan is to have widgets in the dashboard with accurate weather data and a option to see weather charts. Calling all data from OpenWeatherMapAPI.

<br>

- ## Recent Features: **_Motions, Transitions, and Animations_**

  - Svelte Tweening ([Example 1](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte), [Example 2](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/loadingPage/LoadingPage.svelte), [Example 3](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/weather/CurrentWeather/Forcast.svelte)) - The concept of tweening is implementing an animation between two states (e.g., keyframes). For Svelte, they offer a tweening tool that I've implemented accross site that helps with user feedback. Such as between page loads or data fetching.
  - Transitions ([Example 1](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte), [Example 2](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte), [Example 3](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%5Bprofile%5D/%2Bpage.svelte)) - Svelte offers directives that enable a developer to _transition_ a DOM element. For example, I've added `transition:fade` to some of the elements as seen in the examples. Which fades elements in or out on page load or state changes. I'm also useing `transition:fly`, along with transition event listners to trigger new events once another has finished.
  - [Animations](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Svelte can trigger animations on elments as well. Simple example is see on Avatars page when you click on the "X" button in the top right of the cards, which shifts the looped list on DOM. Adding some level of character to the page. Levels of animtion can vary, however a simple default example was achieved on this site by simply adding `animate:flip={{duration: 100}}` to each card.
  - [CSS Animations](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - TailwindCSS hover animations to add a ring around avatar cards.

<br>
