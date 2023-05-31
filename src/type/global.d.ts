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
  checkPass?: string;
};
