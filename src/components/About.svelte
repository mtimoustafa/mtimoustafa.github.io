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
  <h1 class="text-3xl sm:text-4xl font-cursive font-normal tracking-wide text-f-blue-100 pb-4">
    Hi! I'm Mohamed,
  </h1>

  <p>a Canadian living in the Netherlands.</p>

  <p>I work as a full-stack software developer, with a focus on building accessible and delightfully usable applications. At heart, I love tinkering and experimenting with things, which you can find in the links below.</p>

  <p>Occasionally, I make games and music. I also like to curate a little digital garden of interesting links from all over the internet. I'll put it here one day.</p>

  <ul class="list-disc list-inside">
    {#each places as place}
      <li>
        <a
          href="{ place.link }"
          target="_blank"
          rel="noreferrer noopener nofollow { place.rel === 'me' ? 'me' : '' }"
          class="
            text-f-blue-100
            hover:text-sky-50
            hover:underline
            focus:text-sky-50
            focus:underline
            active:text-slate-500
          "
        >
          { place.name }
        </a>
      </li>
    {/each}
  </ul>
</div>

<script>
  const places = [
    { name: 'Resume', link: 'https://resume.fairewinds.ca' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mtimoustafa' },
    { name: 'GitHub', link: 'https://github.com/mtimoustafa' },
    { name: 'GitLab', link: 'https://gitlab.com/fairewinds' },
    { name: 'Itch.io', link: 'https://fairewinds.itch.io' },
    { name: 'Mastodon', link: 'https://mastodon.social/@fairewinds', rel: 'me' },
  ]
</script>
