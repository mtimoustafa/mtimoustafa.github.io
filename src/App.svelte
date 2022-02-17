<main class="container mx-auto h-screen text-white-500">
  <div class="flex justify-center items-start space-x-16 py-36">
    <img src="https://s.gravatar.com/avatar/de0de92608032415a6880c65732ebc7d?s=300" class="rounded-full" />

    <div class="max-w-md space-y-4">
      <h1 class="text-5xl font-bold text-sky-500">Hi! I'm Mohamed,</h1>

      <p>an Egyptian-born Canadian living in the Netherlands.</p>

      <p>I work as a full-stack software developer, with a focus on building accessible and delightfully usable applications. At heart, I love tinkering and experimenting with things, and creating something that makes the world a better place.</p>

      <p>I also like to make music, cook wholesome things, and curate a little digital garden of interesting links from all over the internet.</p>

      <p>
        You can find me in the places below. Come say hi &nbsp;☺️
      </p>

      <ul class="list-disc list-inside">
        {#each places as place}
          <li>
            <a
              href="{ place.link }"
              target="_blank"
              rel="noreferrer noopener nofollow"
              class="text-sky-500 hover:text-white-500"
            >
              { place.name }
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</main>

<script>
  let places = [
    { name: 'Polywork', link: 'https://www.polywork.com/fairewinds' },
    { name: 'Twitter', link: 'https://twitter.com/mtimoustafa' },
    { name: 'Github', link: 'https://github.com/mtimoustafa' },
  ]
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  @import './app.css';

  :root {
    font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
    background-color: #001219;
  }
</style>
