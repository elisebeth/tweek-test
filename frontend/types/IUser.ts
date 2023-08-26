import { DEFAULT_COUNTRY } from "./CoutryEnum";

export interface IUser {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  score: number;
  country: DEFAULT_COUNTRY;
}