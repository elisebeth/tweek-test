<template>
  <aside class="users">
    <h2 class="users__heading">List</h2>
    <transition name="fade" mode="out-in" appear> 
      <ul v-if="!usersStore.isLoading" class="users__list">
        <transition-group name="shuffle">
          <li v-for="user of filtersStore.filteredUsers" class="users__item" :key="user.id" @click="usersStore.setSelectedUser(user.id)" @mouseleave="usersStore.setSelectedUser(null)">
            <UsersModal v-show="usersStore.currentSelectedUserView && usersStore.currentSelectedUser === user.id" :user="usersStore.currentSelectedUserView"/>
            <img :src="user.avatar" alt="avatar" class="users__avatar">
            <div class="users__content">
              <h4 v-html="user.title" class="users__title"/>
              <p v-html="user.subtitle" class="users__subtitle"/>
            </div>
          </li>
        </transition-group>
      </ul>
      <Loader v-else/>
    </transition>
  </aside>
</template>

<script lang="ts" setup>
import { useUsersStore } from '@/stores/Users.ts'
import { useFiltersStore } from '@/stores/Filters';

const usersStore = useUsersStore()
const filtersStore = useFiltersStore()

usersStore.getUsers()

</script>

<style lang="stylus" scoped>
.users
  width 25rem
  height 28rem
  padding 1rem
  box-shadow 0px 0px 8px 2px alpha(#000, .25)
  border-radius 8px
  display flex
  flex-direction column
  align-items center
  transition all .5s
  overflow-y auto
  position relative

  &::-webkit-scrollbar
    width 0

  &__heading 
    font-size 0.875rem
    font-weight 400
    margin-bottom 1.5rem
    align-self flex-start
  
  &__list
    list-style-type none
    display flex
    flex-direction column
    gap 1rem
  
  &__title
    font-weight 600
    font-size 0.875rem
    margin-bottom 0.25rem
  
  &__subtitle
    font-size 0.75rem
    color alpha(#000, .75)
    border-bottom 1px solid alpha(#000, .15)
    padding-bottom 0.75rem
  
  &__avatar
    width 3rem
    height 3rem
    border-radius 50%

  &__item
    display flex
    align-items center
    position relative
    gap 0.5rem
    cursor pointer

.fade-enter-active,
.fade-leave-active
  transition opacity .5s

.fade-enter-from,
.fade-leave-to
  opacity 0

.shuffle-move
.shuffle-enter-active,
.shuffle-leave-active
  transition all 0.5s ease


.shuffle-enter-from,
.shuffle-leave-to
  opacity 0
  transform translateX(30px)

.shuffle-leave-active
  position absolute
</style>