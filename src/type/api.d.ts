import { FormField } from "./global";

export type Api = {
  getUserParams: (values?: FormField | string) => Promise<UserInfo>;
  registerUser: (values?: FormField | string) => Promise<UserInfo>;
  fetchUserFriends: (params: UserFriend) => Promise<UserFriendList>
};

export interface UserInfo {
  ID: number;
  name: string;
  email: string;
  identity: string;
  is_logout: boolean;
  phone: string;
  salt: string;
}

export interface UserFriendList{
  Rows: Rows[]
}

export interface UserFriend{
  userId: number
}

export interface Rows{
  ID: number
  name: string
  [key: string]: any
}