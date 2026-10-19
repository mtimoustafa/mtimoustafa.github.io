<div class="mb-16 px-16 py-8 border border-f-blue-100/20 bg-black">
  <nav class="flex items-end justify-between">
    <a href={resolve('/')} class="relative pl-12">
      <img src="/leaf_logo.svg" aria-hidden="true" alt="" class="absolute left-2 -top-1 w-10 rotate-[0.1rad] logo-border" />
      <h1 class="text-6xl font-cursive font-normal tracking-wide pb-4">
        fairewinds
      </h1>
    </a>

    <a
      href={resolve('/software')}
      aria-current={page.url.pathname === '/software' ? 'page' : undefined}
      class="pb-4 text-lg hover:text-f-blue-100 aria-[current=page]:text-f-blue-100"
    >
      Software
    </a>
  </nav>
</div>

<script>
  import { resolve } from '$app/paths'
  import { page } from '$app/state'
</script>

<style>
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
