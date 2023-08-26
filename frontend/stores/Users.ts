import { defineStore } from "pinia";
import { IUser } from "types/IUser";
import { ref, computed } from 'vue';
import { ScoreEnum } from "@/types/ScoreEnum";

export const useUsersStore = defineStore("usersStore", () => {
  const users = ref<IUser[] | null>(null);
  const pending = ref<boolean>(false);
  const currentSelectedUser = ref<number | null>(null);
  const currentCountry = ref<string | null>(null);
  const currentScore = ref<string | null>(null);

  const config = useRuntimeConfig();

  const getUsers = async () => {
    pending.value = true;
    const data = await $fetch<IUser[]>(`${config.public.BASE_URL}/users/`);
    users.value = data;
    pending.value = false;
  }

  const setSelectedUser = (userId: number | null) => {
    currentSelectedUser.value = userId
  }

  const checkScore = (user: IUser) => {
    if (currentScore.value === ScoreEnum.LESS_TEN) {
      return user.score <= 10 
    } else if (currentScore.value === ScoreEnum.ABOVE_TEN) {
      return user.score > 10
    } else if (currentScore.value === ScoreEnum.ABOVE_TWENTY) {
      return user.score > 20
    }
  }

  const currentSelectedUserView = computed(() => {
    if (users.value) {
      return users.value.filter(user => user.id === currentSelectedUser.value)[0]
    }
    return null;
  })

  const filteredUsers = computed(() => {
    if (currentCountry.value && currentScore.value) {
      return users.value?.filter(user => user.country === currentCountry.value && checkScore(user))
    } else if (currentCountry.value && !currentScore.value) {
      return users.value?.filter(user => user.country === currentCountry.value)
    } else if (!currentCountry.value && currentScore.value) {
      return users.value?.filter(checkScore)
    } else {
      return users.value
    }
  })


  return {
    users, 
    pending,
    currentSelectedUser,
    currentSelectedUserView,
    currentScore,
    currentCountry,
    filteredUsers,
    getUsers,
    setSelectedUser,
  }
})