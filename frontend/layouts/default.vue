<template>
  <div class="default-layout">
    <img src="@/assets/images/logo.png" alt="logo" class="default-layout__logo">
    <div class="default-layout__wrapper">
      <Filter/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<style lang="stylus" scoped>
.default-layout
  width 100%
  height 100vh
  display flex
  flex-direction column
  align-items center

  &__logo
    width 12.5rem
    margin-bottom 4rem
    margin-top 4rem

  &__wrapper
    width 100%
    display grid 
    grid-template-columns 1fr 1fr
    align-items center
    justify-content center
    gap 2rem
</style>