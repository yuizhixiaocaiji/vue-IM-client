import {UserMsg} from "@/type/global";
import {Commit} from "vuex/types/index.js";

export const ADD_USER_MESSAGE: string = "ADD_USER_MESSAGE";
export const ADD_REDIS_ID: string = 'ADD_REDIS_ID';

interface Status {
    userMsg: UserMsg[]
    isReadRedisMsg: string[]
}

const state: Status = {
    userMsg: [],
    isReadRedisMsg: []
};

const mutations = {
    [ADD_USER_MESSAGE](state: Status, newData: UserMsg){
        state.userMsg.push(newData)
    },
    [ADD_REDIS_ID](state: Status, userId: string){
        state.isReadRedisMsg.push(userId)
    }
}

const actions = {
    [ADD_USER_MESSAGE]({commit}: {commit: Commit}, userMsg: UserMsg){
        commit(ADD_USER_MESSAGE, userMsg)
    },
    [ADD_REDIS_ID]({commit}: {commit: Commit}, userId: string){
        commit(ADD_REDIS_ID, userId)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}