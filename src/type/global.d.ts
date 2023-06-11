export type Itype =
  | "login"
  | "register"
  | "vericode"
  | "setPwd"
  | "setInfo"
  | "success"
  | "modifycode"
  | "modify"
  | "modifySend";

export type FormField = {
  name: string;
  password?: string;
  rePassword?: string;
};

export interface UserMsg{
  id: number //消息id
  userId: number//用户id
  dstId:number//发送用户id
  cmd: number
  media: number
  content: string//发送的消息
}
