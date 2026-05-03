import { BaseApp } from "../core/BaseApp";
import { IUser } from "../types/User";
export class UserDataModel extends BaseApp<any> {
  constructor() {
    super("user");
  }

  profileParsed(user: IUser) {
    const result = {
      fullname: user.firstname + " " + user.lastname,
      fristChar:
        user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase(),
      firstname: user.firstname,
      lastname: user.lastname,
      id: user.id,
      email: user.email,
      password: user.password,
      avatarColor: user.avatarColor,
    };
    return result;
  }
}
