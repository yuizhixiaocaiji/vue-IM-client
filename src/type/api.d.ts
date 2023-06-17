import { FormField } from "./global";

export type Api = {
  getUserParams: (values?: FormField | string) => Promise<UserInfo>;
  registerUser: (values?: FormField | string) => Promise<UserInfo>;
  fetchUserFriends: (params: UserFriend) => Promise<UserFriendList>
  findFriendById: (params: userFriendInfo) => Promise<AddFriendMsg>
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

export interface userFriendInfo{
  userId: number
  targetId: number
}

export interface AddFriendMsg{
  Code: number
  Data: number
  Msg: string
  [key: string] : any
}