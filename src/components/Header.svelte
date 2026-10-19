<div class="mb-16 px-16 py-8 bg-black">
  <nav class="flex items-end">
    <a href={resolve('/')} class="home relative pl-12 pr-12">
      <img src="/leaf_logo.svg" aria-hidden="true" alt="" class="absolute left-2 -top-1 w-10 rotate-[0.1rad] logo-border" />
      <h1 class="text-5xl font-cursive font-normal tracking-wide pb-4">
        fairewinds
      </h1>
    </a>

    {#each links as link (link.path)}
      <a
        href={resolve(link.path)}
        aria-current={page.url.pathname === link.path ? 'page' : undefined}
        class="pb-4 pr-8 text-lg"
      >
        <span class="squiggle">{link.name}</span>
      </a>
    {/each}
  </nav>
</div>

<script>
  import { resolve } from '$app/paths'
  import { page } from '$app/state'

  const links = [
    { name: 'about', path: '/about' },
    { name: 'software', path: '/software' },
  ]
</script>

<style>
  nav {
    --hover-transition: 300ms cubic-bezier(0.25, 1, 0.5, 1);
  }
  @media (prefers-reduced-motion: reduce) {
    nav {
      --hover-transition: 0ms;
    }
  }

  .home h1 {
    transition: color var(--hover-transition);
  }

  .home:hover h1,
  .home:focus-visible h1 {
    color: var(--color-f-blue-100);
  }

  .squiggle {
    position: relative;
  }
  /* Hidden by clipping it to zero width, then revealed left to right */
  .squiggle::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10px;
    height: 8px;
    background: url('/squiggle.svg') repeat-x left / 20px 8px;
    clip-path: inset(0 100% 0 0);
    transition: clip-path var(--hover-transition);
  }

  a:hover .squiggle::after,
  a:focus-visible .squiggle::after,
  a[aria-current='page'] .squiggle::after {
    clip-path: inset(0);
  }

  .logo-border {
    animation: rainbow 20s linear infinite;

    filter:
      drop-shadow(2px 0 0 black)
      drop-shadow(-2px 0 0 black)
      drop-shadow(0 2px 0 black)
      drop-shadow(0 -2px 0 black);
  }
  @media (prefers-reduced-motion: reduce) {
    .logo-border {
      animation: none;
    }
  }

  @keyframes rainbow {
    from {
      filter: hue-rotate(0deg)
        drop-shadow(2px 0 0 black) drop-shadow(-2px 0 0 black)
        drop-shadow(0 2px 0 black) drop-shadow(0 -2px 0 black);
    }
    to {
      filter: hue-rotate(360deg)
        drop-shadow(2px 0 0 black) drop-shadow(-2px 0 0 black)
        drop-shadow(0 2px 0 black) drop-shadow(0 -2px 0 black);
    }
  }
</style>
