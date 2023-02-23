<script>
	import { onMount } from 'svelte'
	import { DataStore, Auth } from 'aws-amplify'

	$: Comics = false

	onMount(async () => {})

	const syncComicData = async () => {
		try {
			const marvel = await fetch('api/marvel')
			const marvel_res = await marvel.json()
			Comics = marvel_res.marvel
			console.log(Comics)
		} catch (error) {
			console.log(error)
		}
	}
</script>

<main class="flex flex-col w-full h-full overflow-auto p-4 gap-2">
	<section>
		<h1>Marvel</h1>
		<button class="btn btn-primary" on:click={syncComicData}>Sync Database</button>
	</section>

	<section>
		<h2>Comics</h2>

		{#if !Comics}
			<svg class="animate-spin h-10 w-10 mr-3 fill-white" viewBox="0 0 24 24">
				<path
					class="opacity-75"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
			</svg>
		{:else}
			<div>
				<!-- {#each Comics.data.results as comic}
					<div class="card card-compact w-96 bg-base-100 shadow-xl">
						<figure>
							<img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
						</figure>
						<div class="card-body">
							<h2 class="card-title">Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div class="card-actions justify-end">
								<button class="btn btn-primary">Buy Now</button>
							</div>
						</div>
					</div>
				{/each} -->
			</div>
		{/if}
	</section>
</main>

<!-- {
  "id": 82967,
  "digitalId": 0,
  "title": "Marvel Previews (2017)",
  "issueNumber": 0,
  "variantDescription": "",
  "description": null,
  "modified": "2019-11-07T08:46:15-0500",
  "isbn": "",
  "upc": "75960608839302811",
  "diamondCode": "",
  "ean": "",
  "issn": "",
  "format": "",
  "pageCount": 112,
  "textObjects": [],
  "resourceURI": "http://gateway.marvel.com/v1/public/comics/82967",
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/issue/82967/marvel_previews_2017?utm_campaign=apiRef&utm_source=8a51610a0e82d6d4414b79e79a8bf29a"
    }
  ],
  "series": {
    "resourceURI": "http://gateway.marvel.com/v1/public/series/23665",
    "name": "Marvel Previews (2017 - Present)"
  },
  "variants": [
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/82965",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/82970",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/82969",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/74697",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/72736",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/75668",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/65364",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/65158",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/65028",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/75662",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/74320",
      "name": "Marvel Previews (2017)"
    },
    {
      "resourceURI": "http://gateway.marvel.com/v1/public/comics/73776",
      "name": "Marvel Previews (2017)"
    }
  ],
  "collections": [],
  "collectedIssues": [],
  "dates": [
    {
      "type": "onsaleDate",
      "date": "2099-10-30T00:00:00-0500"
    },
    {
      "type": "focDate",
      "date": "2019-10-07T00:00:00-0400"
    }
  ],
  "prices": [
    {
      "type": "printPrice",
      "price": 0
    }
  ],
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "images": [],
  "creators": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/creators",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/10021",
        "name": "Jim Nausedas",
        "role": "editor"
      }
    ],
    "returned": 1
  },
  "characters": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/characters",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/183698",
        "name": "cover from Marvel Previews (2017)",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/183699",
        "name": "story from Marvel Previews (2017)",
        "type": "interiorStory"
      }
    ],
    "returned": 2
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/comics/82967/events",
    "items": [],
    "returned": 0
  }
} -->
