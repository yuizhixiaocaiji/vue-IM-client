import {Rows} from "@/type/api";
import {Commit} from "vuex/types/index.js";

export const SET_USER_FRIENDS: string = "SET_USER_FRIENDS";

export interface Status{
    rows: Rows[]
}

const state: Status = {
    rows:[]
}

const mutations = {
    [SET_USER_FRIENDS](state: Status, newData: Status) {
        state.rows = [...newData.rows]
    },
};

const actions = {
    [SET_USER_FRIENDS]({ commit }: { commit: Commit }, userFriend: Rows[]){
        const friendState:Status = {
            rows: userFriend
        }
        commit(SET_USER_FRIENDS, friendState)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}