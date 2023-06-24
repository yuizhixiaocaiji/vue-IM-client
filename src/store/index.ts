import { createStore } from "vuex";
import login from "./modules/login";
import createPersistedState from "vuex-persistedstate";
import friendList from "@/store/modules/friendList.ts";
import userMsg from "@/store/modules/userMsg.ts";

export default createStore({
  modules: {
    friendList,
    login,
    userMsg
  },
  plugins: [ createPersistedState({
    // 默认存储在localStorage 现改为sessionStorage
    storage: window.sessionStorage,
    // 本地存储数据的键名
    key: 'mine',
    // 指定需要存储的模块，如果是模块下具体的数据需要加上模块名称，如user.token
    paths: []
  }),
    createPersistedState({
      // 默认存储在localStorage 现改为sessionStorage
      storage: window.localStorage,
      // 指定需要存储的模块，如果是模块下具体的数据需要加上模块名称，如user.token
      paths: ['login']
    })]
});
