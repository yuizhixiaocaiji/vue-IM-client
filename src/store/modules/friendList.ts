import {Commit} from "vuex/types/index.js";
import {MessageUser} from "@/type/global";

export const SET_USER_FRIENDS: string = "SET_USER_FRIENDS";
export const SET_ONE_USER: string = "SET_ONE_USER"

export interface Status{
    rows: MessageUser[]
}

const state: Status = {
    rows:[]
}

const mutations = {
    [SET_USER_FRIENDS](state: Status, newData: Status) {
        state.rows = [...newData.rows]
    },
    [SET_ONE_USER](state: Status, newData: MessageUser) {
        console.log(state.rows)
        state.rows.push(newData)
    },
};

const actions = {
    [SET_USER_FRIENDS]({ commit }: { commit: Commit }, userFriend: MessageUser[]){
        const friendState:Status = {
            rows: userFriend
        }
        commit(SET_USER_FRIENDS, friendState)
    },

    [SET_ONE_USER]({ commit }: { commit: Commit }, user: MessageUser){
        commit(SET_ONE_USER, user)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}