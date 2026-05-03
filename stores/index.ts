import { AppStore } from "./modules/AppStore";
import { UserStore } from "./modules/UserStore";
import { NewsStore } from "./modules/NewsStore";

export const initializeStores = () => {
  AppStore.getInstance();
  UserStore.getInstance();
  NewsStore.getInstance();
};

initializeStores();

export const useAppStore = () => AppStore.getInstance();
export const useUserStore = () => UserStore.getInstance();
export const useNewsStore = () => NewsStore.getInstance();
