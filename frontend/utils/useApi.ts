import { BASE_URL } from "@/config/api.ts";

export const useApi = <T>(request: string, options?: object): Promise<T> => $fetch<T>(`${BASE_URL}${request}`, options);