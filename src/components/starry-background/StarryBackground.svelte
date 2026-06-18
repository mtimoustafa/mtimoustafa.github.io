<div class="starfield" aria-hidden="true">
  {#each stars as star}
    <Star x={star.x} y={star.y} size={star.size} />
  {/each}
</div>

<script>
  import Star from './Star.svelte'

  function generateStars(count, size) {
    return Array.from({ length: count }, () => ({
      x: Math.floor(Math.random() * window.innerWidth),
      y: Math.floor(Math.random() * window.innerHeight),
      size,
    }))
  }

  const stars = [
    ...generateStars(200, 3),
    ...generateStars(100, 5),
    ...generateStars(50, 8),
  ]
</script>

<style>
  .starfield {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  }
</style>
