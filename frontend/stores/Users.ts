import { defineStore } from "pinia";
import { IUser } from "types/IUser";
import { ref, computed } from 'vue';
import { useApi } from "@/utils/useApi";


export const useUsersStore = defineStore("usersStore", () => {
  const users = ref<IUser[] | null>(null);
  const isLoading = ref<boolean>(false);
  const currentSelectedUser = ref<number | null>(null);
  const currentCountry = ref<string | null>(null);
  const currentScore = ref<string | null>(null);

  const getUsers = async () => {
    isLoading.value = true;
    const data = await useApi<IUser[]>('/users/');
    users.value = data;
    isLoading.value = false;
  }

  const setSelectedUser = (userId: number | null) => {
    currentSelectedUser.value = userId
  }

  const currentSelectedUserView = computed(() => {
    if (users.value) {
      return users.value.filter(user => user.id === currentSelectedUser.value)[0]
    }
    return null;
  })

  return {
    users, 
    isLoading,
    currentSelectedUser,
    currentSelectedUserView,
    currentScore,
    currentCountry,
    getUsers,
    setSelectedUser,
  }
})