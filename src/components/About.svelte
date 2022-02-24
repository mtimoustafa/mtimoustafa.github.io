<picture class="md:max-w-xs">
  <source srcset="/landscape_pfp.jpg" media="(max-width:767px)" />
  <source srcset="/portrait_pfp.jpg" media="(min-width:1024px)" />
  <img
    src="/square_pfp.jpg"
    alt="Mohamed standing in a park, smiling"
    class="rounded-xl"
  />
</picture>

<div class="text-lg max-w-md space-y-4">
  <h1 class="text-3xl sm:text-4xl font-bold text-sky-500">Hi! I'm Mohamed,</h1>

  <p>a Canadian living in the Netherlands.</p>

  <p>I work as a full-stack software developer, with a focus on building accessible and delightfully usable applications. At heart, I love tinkering and experimenting with things, and creating something that makes the world a better place.</p>

  <p>I also like to make music, cook wholesome things, and curate a little digital garden of interesting links from all over the internet.</p>

  <p>
    You can find me in the places below. Come say hi ☺️
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

<script>
  const places = [
    { name: 'Polywork', link: 'https://www.polywork.com/fairewinds' },
    { name: 'Twitter', link: 'https://twitter.com/mtimoustafa' },
    { name: 'Github', link: 'https://github.com/mtimoustafa' },
  ]
</script>
