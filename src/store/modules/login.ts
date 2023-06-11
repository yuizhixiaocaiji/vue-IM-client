import { UserInfo } from "@/type/api";
import { Commit } from "vuex/types/index.js";

export const SET_USER_INFO: string = "SET_USER_INFO";

interface Status {
  id: number;
  name: string | null;
  token: string | null;
}

const state: Status = {
  id: 0,
  name: '',
  token: '',
};

const mutations = {
  [SET_USER_INFO](state: Status, newData: Status) {
    const { id, name, token } = newData;
    state.id = id;
    state.name = name;
    state.token = token;
  },
};

const actions = {
  [SET_USER_INFO]({ commit }: { commit: Commit }, userInfo: UserInfo) {
    const newData: Status = {
      id: userInfo.ID,
      name: userInfo.name,
      token: userInfo.identity,
    };
    commit(SET_USER_INFO, newData);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
