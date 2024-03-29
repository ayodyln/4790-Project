# SvelteKit // AWS Amplify Project

URL: [sveltekit4790.dylan-portfolio.dev](sveltekit4790.dylan-portfolio.dev)

**SvelteKit** is offically out and it is game changing. The developers experience with this framework has the beauty of _Svelte's_ powerful and quick UI framework. With styntax that is very easy to read. This app has the power of **AWS Amplify**, with the capabilites of _Authentication, DataStore/AppSync, and File Storage_. This app demonstrates my compehension of SvelteKit and Amplify services, the orignail repository for the app without Amplify can be found [here](https://github.com/ayodyln/DGM3790-SvelteKit).

### Tech Stack and APIs:

- [SvelteKit](https://kit.svelte.dev/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Faker API](https://fakerjs.dev/)
- [Movie API](https://www.omdbapi.com/)
- [Weather API](https://openweathermap.org/api)
- [NASA API(s)](https://api.nasa.gov/)
- [Marvel API](https://developer.marvel.com/)

[See all installed packages.](https://github.com/ayodyln/4790-Project/blob/master/package.json)

# Key Features

- ## **[Routes](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes)**

  SvelteKit runs off of a _`filesystem-based router`_ and pages will be stored in the directory **`src/routes`**. Each page that is created will be stored in this directory of the SvelteKit app. Files that are named `+page.svelte` are the root files that Vite will compile to something akin to `index.html`. For example, **`src/routes/+page.svelte`** is our **Home Page**. Other files such as `+server.js, +page.server.js, +layout.js` are all files that handled data and UI for a given page's directory. Learn more at the [SvleteKit Docs](https://kit.svelte.dev/docs/routing).

  The pages that were built for this web-app are corresponding to some of the [APIs](#apis-used) being used.

  ### **[Dynamic Routing](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/avatars)**:

  SvelteKit offers Dynamic Routing, which is useful to render custom pages to the client. Based on the data that is being requested by the user. Folders with the naming convention of brackets around the folder name, `src/routes/avatar/[profile]/+page.svelte`.

  The Avatars page renders a list of avatars and randomized data tied to each one. This is done by using the [Faker API](#apis-used). When you click on one of the [`Avatar Cards`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) on the page, it will route you to the dynamic folder within the Avatars folder, and render more data that is specific to the Avatar.

<br>

- ## **Authorization**

  AWS Amplify has a service for authorizing users and protecting your GraphQL APIs. Currently, a user needs to be logged in to interact with the app fully. API calls that are from my Amplify backend are protected by logged in users that can only see their own saved objects, users with the group of _admin_ have full access to CRUD operations to the API for any user. I'm interacting directly with the Auth API, and using my own UI designs. [Click here to read more about Auth](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/).

  _**Other Examples:**_

  - [Login Function](https://github.com/ayodyln/4790-Project/blob/master/src/lib/components/AuthComponent/SignIn/SignIn.svelte)
  - [Logout Function](https://github.com/ayodyln/4790-Project/blob/master/src/lib/components/header/Header.svelte)

<br>

- ## **DataStore**

  AWS utilizes the power of [AppSync](https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html), enabling me to easily interact with multiple AWS services at once in a scalable way, while syncing/combining data from DynamoDB/GraphQL, AWS Lambda, and other HTTPS APIs you create. To start with DataStore, the documentation is the best thing to follow [AWS Amplify Storage](https://docs.amplify.aws/lib/storage/getting-started/q/platform/js/). DataStore enables a online and offline user interactions that will sync later on and will resove merge conflicts automatically. But, it important to note that if you want to use this service you must not run `amplify add storage` not `amplify add api`.

  My app employs the specific power of DataStore of _Real-Time Data_ via the function `DataStore.observeQuery()`. This builds a connection from the client to my API and subscribes the user to any changes that they can see. Meaning, a another user could do something and the other user will see that change as well (e.g., creating a new saved comicbook hero, [example](https://github.com/ayodyln/4790-Project/blob/master/src/routes/marvelAPI/%2Bpage.svelte)).

<br>

- ## **Svelte Conditional Logic**

  Svelte lets you conditionally render UI to the DOM. On top of using SvelteKit serverside capabilities, it lets a developer build an interactive UI experience. For this project, I used conditional logic everywhere, a prime example is on my [`Avatars Page`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte), specifically with the custom component [`StatusMsg`](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/Avatar/StatusMsg.svelte).

  The `StatusMsg` svelte component, is used on the avatars page. This component takes the prop `toggleAlert`. Depending on user actions on the Avatar page (e.g., creating or deleting avatars, and handling errors). Depending on what the value of `toggleAlert` is exactly equal to, it will render a DaisyUI alert box. Which `flys` in and then `fades` out after a set time, this is accomplished with Svelte Transitions.

  _**Other Examples:**_

  - [Weather Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte)
  - [Weather Icons](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/weather/CurrentWeather/WeatherIcon.svelte)
  - [Movies Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/movies/%2Bpage.svelte)
  - [APOD Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/apod/%2Bpage.svelte)
  - [Auth Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/Auth/%2Bpage.svelte)
  - [SignUp Component](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/AuthComponent/SignUp/SignUp.svelte)
  - [Profile Page - Components](https://github.com/ayodyln/4790-Project/tree/master/src/lib/components/profile)
  - [MarvelAPI Page](https://github.com/ayodyln/4790-Project/blob/master/src/routes/marvelAPI/%2Bpage.svelte)
  - [Threlte](https://github.com/ayodyln/4790-Project/blob/master/src/routes/threlte/%2Bpage.svelte)

<br>

- ## **Array Methods (Svelte & Javascript)**

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

- ## **[Svelte Events](https://svelte.dev/docs#template-syntax-element-directives)**

  User interactions are key to bringing an application to life. There are multiple instances in that I used the native `on:click` element directive on my components. Many directives let you add event listeners to elements, then you can use Javascript to make those events custom.

  ### Examples:

  - [Avatars Page - Avatar Creation and Deletion](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte)
  - [Profile Page - Theme Changer](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/profile/%2Bpage.svelte)
  - [Movie Modal](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/MovieModal/MovieModal.svelte)
  - [Landing Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/%2Bpage.svelte)
  - [APOD Drawer Options](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte)
  - [MarvelAPI](https://github.com/ayodyln/4790-Project/blob/master/src/routes/marvelAPI/%2Bpage.svelte)
  - [Profile](https://github.com/ayodyln/4790-Project/blob/master/src/routes/profile/%2Bpage.svelte)

<br>

- ## **Forms and Form Actions**

  Forms are integral to how users can send data to the server, often developers use Javascript to _wire_ up a form's UI. Then utilizing the Fetch API to send data. With SvelteKit, you are using Forms how they were meant to be used but can be enhanced with Javascript by using the `use:enhance` directive on forms.

  The [Auth Page](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/Auth/%2Bpage.svelte) is the first instance of the user interacting with forms. To sign in, a user must interact with [Sign In Form](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/AuthComponent/SignIn/SignIn.svelte). I'm _loosely_ connecting to AWS Cognito services, and signing a user in this way. The goal is to access the stored data of a user and place them into SvelteKit stores. The [Sign Up Form](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/AuthComponent/SignUp/SignUp.svelte) is more complex since I'm using inputs for _name, email, password, profile picture, and a textarea for user's bio_.

<br>

- ## **Lifecycle function and Writable Stores**
  - [Theme and User Data Store](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/lib/stores) - Added User and Theme stores, to update the website based upon user data and desired theme. Stores are updated upon login.
  - [onMount Example](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Added this feature to the Avatars page, even though the data loaded is very quick naturally, I had to mimic a API call via a timeout function. If were to do a fetch request here, it would still function as desired.
  - [Weather App](https://github.com/ayodyln/DGM3790-SvelteKit/tree/master/src/routes/weather) - Started a weather app dashboard. Currently figuring out how to layout the UI and intergrate a graph of somekind. The plan is to have widgets in the dashboard with accurate weather data and a option to see weather charts. Calling all data from OpenWeatherMapAPI.

<br>

- ## **Motions, Transitions, and Animations**

  - Svelte Tweening ([Example 1](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte), [Example 2](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/loadingPage/LoadingPage.svelte), [Example 3](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/lib/components/weather/CurrentWeather/Forcast.svelte)) - The concept of tweening is implementing an animation between two states (e.g., keyframes). For Svelte, they offer a tweening tool that I've implemented accross site that helps with user feedback. Such as between page loads or data fetching.
  - Transitions ([Example 1](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/weather/%2Bpage.svelte), [Example 2](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte), [Example 3](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%5Bprofile%5D/%2Bpage.svelte)) - Svelte offers directives that enable a developer to _transition_ a DOM element. For example, I've added `transition:fade` to some of the elements as seen in the examples. Which fades elements in or out on page load or state changes. I'm also useing `transition:fly`, along with transition event listners to trigger new events once another has finished.
  - [Animations](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - Svelte can trigger animations on elments as well. Simple example is see on Avatars page when you click on the "X" button in the top right of the cards, which shifts the looped list on DOM. Adding some level of character to the page. Levels of animtion can vary, however a simple default example was achieved on this site by simply adding `animate:flip={{duration: 100}}` to each card.
  - [CSS Animations](https://github.com/ayodyln/DGM3790-SvelteKit/blob/master/src/routes/avatars/%2Bpage.svelte) - TailwindCSS hover animations to add a ring around avatar cards.
