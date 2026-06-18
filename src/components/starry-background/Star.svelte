<div
  class="star"
  style="left: {x}px; top: {y}px; width: {size}px; height: {size}px;"
></div>

<script>
  export let x
  export let y
  export let size = 1
</script>

<style>
  .star {
    position: fixed;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;
  }
</style>
