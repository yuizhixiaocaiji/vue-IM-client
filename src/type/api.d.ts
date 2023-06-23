import { FormField } from "./global";

export type Api = {
  getUserParams: (values?: FormField | string) => Promise<UserInfo>
  registerUser: (values?: FormField | string) => Promise<UserInfo>
  fetchUserFriends: (params: UserFriend) => Promise<UserFriendList>
  findFriendById: (params: UserFriendInfo) => Promise<AddFriendMsg>
  createCommunity: (params: CreateCommunity) => Promise<any>
  loadCommunity: (params: LoadCommunity) => Promise<LoadCommunityData>
};

export interface DefaultPostRes{
  Code: number
  Data: any
  Msg: string
  Total: string
}

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

export interface UserFriendInfo{
  userId: number
  targetId: number
}

export interface AddFriendMsg{
  Code: number
  Data: number
  Msg: string
  [key: string] : any
}

export interface CreateCommunity{
  ownerId: number
  name: string
}

export interface LoadCommunity extends Omit<CreateCommunity, 'name'>{}

export interface LoadCommunityData extends DefaultPostRes{
  Rows: CommunityData[]
}

export interface CommunityData{
  ID: number
  Img: string
  Name: string
  OwnerId: number
  CreatedAt: string
  UpdatedAt: string
}