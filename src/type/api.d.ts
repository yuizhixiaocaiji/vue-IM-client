import { FormField } from "./global";

export type Api = {
  getUserParams: (values?: FormField | string) => Promise<UserInfo>;
  registerUser: (values?: FormField | string) => Promise<UserInfo>;
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
