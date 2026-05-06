import { useCookie } from "nuxt/app";
import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";
import { users } from "../../mock/users";
import { IUser } from "../../types/User";

interface IApplication {
  theme: string;
  users: IUser[];
}

export class AppStore extends BaseStore<IApplication> {
  private static _instance: AppStore;

  public static getInstance(): AppStore {
    if (!AppStore._instance) {
      AppStore._instance = new AppStore();
    }
    return AppStore._instance;
  }

  private constructor() {
    super("application", {
      theme: "primary",
      users: [],
    });
    StoreManager.register(this);
  }

  public get getTheme(): string {
    return this._state.theme;
  }

  public setTheme(theme: string): void {
    this._state.theme = theme;
    localStorage.setItem("theme", theme);
  }

  public configUsersMock() {
    const usersList = localStorage.getItem("usersMockData");
    if (!usersList) {
      const json = JSON.stringify(users);
      localStorage.setItem("usersMockData", json);
      this._state.users = users;
    } else {
      const parse = JSON.parse(usersList);
      this._state.users = parse;
    }
  }

  public reset() {
    this._state.theme = "light";
  }
}
