import type { IUser } from "../../types/User";
import { BaseStore } from "../../core/BaseStore";
import { StoreManager } from "../../core/StoreManager";

interface IUserState {
  user: IUser;
  isAuthenticated: boolean;
  moduleState: string;
}

export class UserStore extends BaseStore<IUserState> {
  private static _instance: UserStore;

  public static getInstance(): UserStore {
    if (!UserStore._instance) {
      UserStore._instance = new UserStore();
    }
    return UserStore._instance;
  }

  private constructor() {
    super("user", {
      user: {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        fullname: "",
        fristChar: "",
        avatarColor: "",
      },
      isAuthenticated: false,
      moduleState: "",
    });

    StoreManager.register(this);
  }

  get getModuleState(): string {
    return this._state.moduleState;
  }

  public setModuleState(moduleState: string) {
    this._state.moduleState = moduleState;
  }

  get getUser() {
    return this._state.user;
  }

  setUser(user: IUser) {
    this._state.user = user;
  }

  setAuthenticated(flag: boolean) {
    this._state.isAuthenticated = flag;
  }

  public get getAuthenticated() {
    return this._state.isAuthenticated;
  }

  public logout() {
    this.reset();
  }

  public reset() {
    this._state.user = {
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      fullname: "",
      fristChar: "",
      avatarColor: "",
    };
    this._state.isAuthenticated = false;
    this._state.moduleState = "";
  }
}
