import { http } from "@/utils";
import { Api } from "@/type/api";
import qs from "qs"

export const getUserParams: Api["getUserParams"] = async (values) => {
  return new Promise((resolve, reject) => {
    http.post("/user/findUserByNameAndPwd",{},{params: JSON.parse(JSON.stringify(values))})
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
};

export const registerUser: Api["registerUser"] = async (values) => {
  return new Promise((resolve, reject) => {
    http.get("/user/createUser",{params: JSON.parse(JSON.stringify(values))})
      .then((data: any) => {
        resolve(data);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });
};

export const fetchUserFriends: Api["fetchUserFriends"] = async (params) => {
  return new Promise((resolve, reject) => {
    http.post("/searchFriends",qs.stringify(params))
        .then((data: any) => {
          resolve(data);
        })
        .catch((err: Error) => {
          reject(err);
        });
  });
};

export const findFriendById: Api["findFriendById"] = async (params) => {
    return new Promise((resolve, reject) => {
        http.post("/contact/addFriend",qs.stringify(params))
            .then((data: any) => {
                resolve(data);
            })
            .catch((err: Error) => {
                reject(err);
            });
    });
}