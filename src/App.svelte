<main
  class="
    flex
    flex-col
    md:flex-row
    justify-center
    items-start

    mx-auto
    max-w-md
    md:max-w-none

    px-10
    py-16
    sm:py-20
    md:py-24
    lg:py-36

    space-y-8
    md:space-y-0
    md:space-x-16

    text-sky-50
  "
>
  <About />
</main>

<script>
  import About from './components/About.svelte'

  // <body> style must be added dynamically to index.html
  // for Tailwind to pick it up
  document.body.classList.add('bg-midnight')
</script>

<style>
  @import './main.css';
</style>
