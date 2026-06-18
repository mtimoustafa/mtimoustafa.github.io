<div
  class="star"
  style="left: {x}px; top: {y}px; width: {size}px; height: {size}px; animation-duration: {duration}s; animation-delay: {delay}s;"
></div>

<script>
  const MIN_DURATION = 4
  const MAX_DURATION = 8
  const MAX_DELAY = 5

  export let x
  export let y
  export let size = 1
  export let duration = MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION)
  export let delay = Math.random() * MAX_DELAY
</script>

<style>
  .star {
    position: fixed;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;
    animation: twinkle ease-in-out infinite;
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0; }
    50% { opacity: 0.8; }
  }

  @media (prefers-reduced-motion: reduce) {
    .star {
      animation: none;
      opacity: 0.6;
    }
  }
</style>
