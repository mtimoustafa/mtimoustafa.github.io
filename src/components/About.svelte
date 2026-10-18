<div class="px-16">
  <p>Hi! I'm Mohamed, a Canadian living in the Netherlands.</p>

  <p>I work as a full-stack software developer, with a focus on building accessible and delightfully usable applications. At heart, I love tinkering and experimenting with things, which you can find in the links below.</p>

  <p>Occasionally, I make games and music. I also like to curate a little digital garden of interesting links from all over the internet. I'll put it here one day.</p>

  <ul class="list-disc list-inside">
    {#each places as place (place.link)}
      <li>
        <a
          href="{ place.link }"
          target="_blank"
          rel="noreferrer noopener nofollow { place.rel === 'me' ? 'me' : '' }"
          class="
            text-f-blue-100
            underline underline-offset-4
            hover:text-sky-50
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

  <div class="pt-4">
    <Webring />
  </div>
</div>

<script>
  import Webring from './Webring.svelte'

  const places = [
    { name: 'Resume', link: 'https://resume.fairewinds.ca' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mtimoustafa' },
    { name: 'GitHub', link: 'https://github.com/mtimoustafa' },
    { name: 'GitLab', link: 'https://gitlab.com/fairewinds' },
    { name: 'Itch.io', link: 'https://fairewinds.itch.io' },
    { name: 'Mastodon', link: 'https://mastodon.social/@fairewinds', rel: 'me' },
  ]
</script>
