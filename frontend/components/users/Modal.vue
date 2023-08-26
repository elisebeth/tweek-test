<template>
  <div class="users-modal">
    <span class="users-modal__text">{{ props.user?.country }}</span>
  </div>
</template>

<script lang="ts" setup>
import { IUser } from 'types/IUser';

const props = defineProps<{user: IUser | null}>()
</script>

<style lang="stylus" scoped>
.users-modal
  position absolute
  left 0
  top 0
  background #fff
  box-shadow 0px 0px 8px 2px alpha(#000, .25)
  padding 0.5rem
  border-radius 8px
  transform translateY(-100%)
  z-index 999

  &__text
    font-weight 600
    font-size 0.875rem
    color alpha(#000, .8)
</style>