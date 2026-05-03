import { IUser } from "./User";

export interface INews {
  id?: string | number;
  title: string;
  content: string;
  category: string;
  creator: IUser;
  createAt: string;
  likes: number;
  likeFlag: boolean;
}

export interface ICreateNews {
  id?: string | number;
  title: string;
  content: string;
  category: string;
  creator: IUser;
}
