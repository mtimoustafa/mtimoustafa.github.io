<template>
  <div class="global-wrapper">
    <h1>Under Construction</h1>

    <img src="~assets/welcome-banner.gif">

    <img src="~assets/under-construction-2.gif">
    <img src="~assets/under-construction-1.gif">
    <img src="~assets/under-construction-3.gif">
    <img src="~assets/under-construction-4.gif">

    <img src="~assets/surf-cpu.gif">
  </div>
</template>

<style lang="scss" scoped>
$img-space: 10px;

.global-wrapper {
  display: flex;
  flex-direction: column;

  > * {
    align-self: center;
  }
}

img {
  display: block;
  margin-bottom: $img-space;
}
</style>
