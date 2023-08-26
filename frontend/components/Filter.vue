<template>
  <form class="filters">
    <label for="select-country" class="filters__label">
      <Icon @click="filterDisable(DEFUALT_FILTERS.COUNTRY)" class="filters__close" :class="{'filters__close_active': usersStore.currentCountry}" name="material-symbols:close-rounded" size="1.5rem" color="rgba(0,0,255,0.4)" />
      <select id="select-country" v-model="usersStore.currentCountry" class="filters__select" :class="{'filters__select_active': usersStore.currentCountry }">
        <option value="Russia" class="filters__option">Russia</option>
        <option value="USA" class="filters__option">USA</option>
      </select>
      <span class="filters__description" :class="{'filters__description_active': usersStore.currentCountry}">Filter by country</span>
    </label>
    <label for="select-score" class="filters__label">
      <Icon @click="filterDisable(DEFUALT_FILTERS.SCORE)" class="filters__close" :class="{'filters__close_active': usersStore.currentScore}" name="material-symbols:close-rounded" size="1.5rem" color="rgba(0,0,255,0.4)" />
      <select id="select-score" v-model="usersStore.currentScore" class="filters__select" :class="{'filters__select_active': usersStore.currentScore }">
        <option value="<10" class="filters__option">{{ '<10' }}</option>
        <option value=">10" class="filters__option">{{ '>10' }}</option>
        <option value=">20" class="filters__option">{{ '>20' }}</option>
      </select>
      <span class="filters__description" :class="{'filters__description_active': usersStore.currentScore}">Filter by score</span>
    </label>
  </form>
</template>

<script lang="ts" setup>
import {useUsersStore} from '@/stores/Users';

enum DEFUALT_FILTERS {
  COUNTRY = 'currentCountry',
  SCORE = 'currentScore'
}

const usersStore = useUsersStore();

const filterDisable = (value: DEFUALT_FILTERS): void => {
  usersStore[value] = null;
}

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
      color alpha(blue, .4)
    
    &:hover
      transform translateY(-100%)
      font-size 0.75rem
      color alpha(blue, .4)

  &__close
    position absolute
    right 0
    top 0
    transform translateY(-25%)
    cursor pointer
    opacity 0
    transition opacity .25s
    z-index 1

    &_active
      opacity 1

  &__select
    outline none
    border none
    border-bottom 1px solid alpha(#000, .5)
    padding-bottom 0.25rem
    transition border .25s
    -webkit-appearance none
    -moz-appearance none
    appearance none
    position relative
    cursor pointer

    &:focus
      border-color alpha(blue, .4)
    
    &_active
      border-color alpha(blue, .4)

    &:hover + .filters__description
      transform translateY(-100%)
      font-size 0.75rem
      color alpha(blue, .4)
</style>