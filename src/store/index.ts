import { createStore } from "vuex";
import login from "./modules/login";
import createPersistedState from "vuex-persistedstate";
import friendList from "@/store/modules/friendList.ts";

export default createStore({
  modules: {
    friendList,
    login,
  },
  plugins: [createPersistedState()],
});
