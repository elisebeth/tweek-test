import { defineStore, storeToRefs } from "pinia";
import { useUsersStore } from "./Users";


import { IUser } from "@/types/IUser";
import { ScoreEnum } from "@/types/ScoreEnum";

const DEFAULT_SCORE_FILTERS = {
  [ScoreEnum.LESS_TEN]: 10,
  [ScoreEnum.ABOVE_TEN]: 10,
  [ScoreEnum.ABOVE_TWENTY]: 20
}

export const useFiltersStore = defineStore('filtersStore', () => {

  const usersStore = useUsersStore();

  const {users, currentScore, currentCountry} = storeToRefs(usersStore);

  const checkScore = (user: IUser) => {
    if (currentScore.value === ScoreEnum.LESS_TEN) {
      return user.score <= DEFAULT_SCORE_FILTERS[ScoreEnum.LESS_TEN]
    } else if (currentScore.value === ScoreEnum.ABOVE_TEN) {
      return user.score > DEFAULT_SCORE_FILTERS[ScoreEnum.ABOVE_TEN]
    } else if (currentScore.value === ScoreEnum.ABOVE_TWENTY) {
      return user.score > DEFAULT_SCORE_FILTERS[ScoreEnum.ABOVE_TWENTY]
    }
  }

  const filteredUsers = computed(() => {
    if (currentCountry.value && currentScore.value) {
      return users.value?.filter((user: IUser) => user.country === currentCountry.value && checkScore(user))
    } else if (currentCountry.value && !currentScore.value) {
      return users.value?.filter((user: IUser) => user.country === currentCountry.value)
    } else if (!currentCountry.value && currentScore.value) {
      return users.value?.filter(checkScore)
    } else {
      return users.value
    }
  })

  return {
    filteredUsers
  }

})