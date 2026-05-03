import { UserDataModel } from "../model/User";
import { useToast } from "../composables/useToast";
import { IUser } from "../types/User";
import { useUserStore } from "../stores/index";

const { success, error } = useToast();

import { navigateTo, useCookie } from "nuxt/app";
class UserController extends UserDataModel {
  constructor() {
    super();
  }

  private userStore = useUserStore();

  createAccount(profile: IUser): void {
    try {
      const usersList: string | null = localStorage.getItem("usersMockData");
      let parseUsersList = JSON.parse(usersList ? usersList : "");

      parseUsersList.push({ ...profile, id: parseUsersList.length + 1 });

      localStorage.setItem("usersMockData", JSON.stringify(parseUsersList));

      navigateTo("/auth/login");
      success("New profile created");
    } catch (err) {
      error("Create profile has error");
    }
  }

  login(userData: { email: string; password: number | string }): void {
    try {
      const usersList: string | null = localStorage.getItem("usersMockData");
      let parseUsersList = JSON.parse(usersList ? usersList : "");

      const targetUser = parseUsersList.find((user: IUser) => {
        return (
          user.email === userData.email && user.password === userData.password
        );
      });

      if (targetUser) {
        const token = useCookie("token");
        token.value = "fAkEtOkEn";
        const userCookie = useCookie("user");
        userCookie.value = JSON.stringify(targetUser);
        success("Login Successfull");
        navigateTo("/");
        setTimeout(() => {
          this.getUserProfile();
        }, 1);
      } else {
        error("Email or password has error");
      }
    } catch (err) {
      error("Login has error");
    }
  }

  getUserProfile() {
    try {
      const token = useCookie("token");
      if (token.value) {
        const user: IUser | any = useCookie("user");

        if (user.value) {
          const resultInformation: IUser = this.profileParsed(user.value);
          this.userStore.setUser(resultInformation);
          this.userStore.setAuthenticated(true);
        }
      }
    } catch (err) {
      error("User profile proccess has error");
    }
  }

  updateProfile(profile: IUser): void {
    try {
      const userCookie = useCookie("user");

      const usersList: string | null = localStorage.getItem("usersMockData");
      let parseUsersList = JSON.parse(usersList ? usersList : "");

      parseUsersList = parseUsersList.filter((user: IUser) => {
        return user.id != this.userStore.getUser.id;
      });

      const result = {
        id: this.userStore.getUser.id,
        firstname: profile.firstname,
        lastname: profile.lastname,
        email: profile.email,
        password: this.userStore.getUser.password,
        avatarColor: this.userStore.getUser.avatarColor,
      };

      parseUsersList.push(result);

      localStorage.setItem("usersMockData", JSON.stringify(parseUsersList));
      userCookie.value = JSON.stringify(result);

      setTimeout(() => {
        this.getUserProfile();
      }, 1);

      success("Profile updated");
    } catch (err) {
      error("Update profile has error");
    }
  }

  updateAvatarColor(color: string): void {
    try {
      const userCookie = useCookie("user");

      const usersList: string | null = localStorage.getItem("usersMockData");
      let parseUsersList = JSON.parse(usersList ? usersList : "");

      parseUsersList = parseUsersList.filter((user: IUser) => {
        return user.id != this.userStore.getUser.id;
      });

      const result = {
        id: this.userStore.getUser.id,
        firstname: this.userStore.getUser.firstname,
        lastname: this.userStore.getUser.lastname,
        email: this.userStore.getUser.email,
        password: this.userStore.getUser.password,
        avatarColor: color,
      };

      parseUsersList.push(result);

      localStorage.setItem("usersMockData", JSON.stringify(parseUsersList));
      userCookie.value = JSON.stringify(result);

      setTimeout(() => {
        this.getUserProfile();
      }, 1);

      success("Avatar color updated");
    } catch (err) {
      error("Update avatar color has error");
    }
  }

  logout() {
    const token = useCookie("token");
    const user: IUser | any = useCookie("user");

    token.value = "";
    user.value = "";

    this.userStore.reset();

    navigateTo("/");
  }
}

export const userController = new UserController();
