import { http } from "@/utils";
import { Api } from "@/type/api";

export const getUserParams: Api["getUserParams"] = async (values) => {
  return new Promise((resolve, reject) => {
    http({
      method: "post",
      url: "/api/user/findUserByNameAndPwd",
      params: JSON.parse(JSON.stringify(values)),
    })
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
};
