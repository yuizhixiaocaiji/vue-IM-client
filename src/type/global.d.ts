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
  userId?: number//用户id
  dstId?:number//发送用户id
  media: number
  content: string//发送的消息
  isMine?: boolean//本消息是否属于我自己
}

export interface SendMsg{
  TargetId?: number
  Type: number
  userId?: number
  Media:number
  Content: string
}