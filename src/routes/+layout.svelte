<StarryBackground />

<div
  class="
    mx-auto max-w-7xl
    min-h-dvh
    text-sky-50 font-light
    border border-f-blue-100/20 bg-black/80
  "
>
  <Header />

  <main>
    {@render children()}
  </main>
</div>

<script>
  import '../main.css'
  import Header from '../components/Header.svelte'
  import StarryBackground from '../components/starry-background/StarryBackground.svelte'

  let { children } = $props()
</script>
