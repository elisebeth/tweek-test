<template>
  <footer class="footer">
    <p class="footer__description">{{ new Date().getFullYear() }} — <span class="footer__special">Vuetify</span></p>
  </footer>
</template>

<style lang="stylus" scoped>
.footer
  width 100% - 2rem
  margin auto auto 1.5rem auto
  background alpha(red, .85)
  color #fff
  text-align center
  padding 1rem

  &__description
    font-size 1rem
    font-weight 400
  
  &__special
    font-weight 700
</style>