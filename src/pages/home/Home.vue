<template>
  <div class="common-layout">
    <el-container>
      <el-header height="42px">
        <SearchBar></SearchBar>
      </el-header>
      <el-container>
        <UserAsideBar
          :classObjectName="classObjectName"
          @changeMenu="changeMenu"
        ></UserAsideBar>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import UserAsideBar from "./components/UserAsideBar.vue";
import SearchBar from "../../components/SearchBar.vue";
import { useRouter } from "vue-router";
import { onMounted, ref} from "vue";
import { getIMWsUrl} from "@/config";
import {Ws} from "@/utils";
import { useStore} from "vuex";
import {fetchUserFriends} from "@/services";
import {SET_USER_FRIENDS} from "@/store/modules/friendList.ts";

const router = useRouter();

const store = useStore();

const classObjectName = ref("message");

let ws: any= null

onMounted(() => {
  if(router.currentRoute.value.name === 'default'){
    classObjectName.value = 'message'
  }else{
    classObjectName.value = <string>router.currentRoute.value.name
  }
  initWebsocket()
  fetchParams()
})

function changeMenu(menuName) {
  classObjectName.value = menuName;
  router.push(`/home/${classObjectName.value}`);
}

/**
 * 初始化websocket
 */
const initWebsocket = async () => {
  const wsUrl = getIMWsUrl()
  ws = await Ws.create(wsUrl + "/user/sendUserMsg?id="+store.state.login.id + "&token=" + store.state.login.token)

  if(ws){
    // ws.sendMsg({
    //   mode: 'MESSAGE',
    //   msg: 'Hello'
    // })
  }
}

/**
 * 获取用户好友列表
 */

const fetchParams = async () => {
  const params = {
    userId: store.state.login.id
  }
  const data = await fetchUserFriends(params)
  const { Rows } = data
  await store.dispatch("friendList/" + SET_USER_FRIENDS, Rows)
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #438be5;
}
</style>
