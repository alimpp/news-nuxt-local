export interface IUser {
  id: number | string;
  firstname: string;
  lastname: string;
  email: string;
  password?: number | string;
  fullname?: string;
  fristChar?: string;
  avatarColor?: string;
}
