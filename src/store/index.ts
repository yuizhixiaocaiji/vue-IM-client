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
  plugins: [createPersistedState()],
});
