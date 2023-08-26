<template>
  <form class="filters">
    <label class="filters__label">
      <select v-model="usersStore.currentCountry" class="filters__select">
        <option value="Russia" class="filters__option">Russia</option>
        <option value="USA" class="filters__option">USA</option>
      </select>
      <span class="filters__description" :class="{'filters__description_active': usersStore.currentCountry}">Filter by country</span>
    </label>
    <label class="filters__label">
      <select v-model="usersStore.currentScore" class="filters__select">
        <option value="<10" class="filters__option">{{ '<10' }}</option>
        <option value=">10" class="filters__option">{{ '>10' }}</option>
        <option value=">20" class="filters__option">{{ '>20' }}</option>
      </select>
      <span class="filters__description" :class="{'filters__description_active': usersStore.currentScore}">Filter by score</span>
    </label>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {useUsersStore} from '@/stores/Users';

const usersStore = useUsersStore();
</script>

<style lang="stylus" scoped>
.filters
  width 25rem
  margin auto 0 auto auto
  display flex
  flex-direction column
  gap 2rem

  &__label
    position relative
    display flex
    flex-direction column

  &__description
    color alpha(#000, .5)
    position absolute
    transition all .25s

    &_active
      transform translateY(-100%)
      font-size 0.75rem
  
  &__select
    outline none
    border none
    border-bottom 1px solid alpha(#000, .5)
    padding-bottom 0.25rem

    &:focus + .filters__description
      transform translateY(-100%)
      font-size 0.75rem

</style>