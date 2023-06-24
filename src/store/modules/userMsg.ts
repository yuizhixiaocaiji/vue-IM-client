import {UserMsg} from "@/type/global";
import {Commit} from "vuex/types/index.js";

export const ADD_USER_MESSAGE: string = "ADD_USER_MESSAGE";

interface Status {
    userMsg: UserMsg[]
}

const state: Status = {
    userMsg: []
};

const mutations = {
    [ADD_USER_MESSAGE](state: Status, newData: UserMsg){
        state.userMsg.push(newData)
    }
}

const actions = {
    [ADD_USER_MESSAGE]({commit}: {commit: Commit}, userMsg: UserMsg){
        commit(ADD_USER_MESSAGE, userMsg)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}