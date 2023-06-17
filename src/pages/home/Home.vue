<template>
  <div class="common-layout">
    <el-container class="common-layout-content">
      <el-header height="42px">
        <SearchBar></SearchBar>
      </el-header>
      <el-container class="layout-content-body">
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
import {nextTick, onMounted, ref} from "vue";
import { getIMWsUrl} from "@/config";
import {EventBus, Ws} from "@/utils";
import { useStore} from "vuex";
import {fetchUserFriends} from "@/services";
import {SET_USER_FRIENDS} from "@/store/modules/friendList.ts";
import {SendMsg, UserMsg} from "@/type/global";
import {onUnmounted} from "vue-demi";
import {ADD_USER_MESSAGE} from "@/store/modules/userMsg.ts";

const router = useRouter();

const store = useStore();

const classObjectName = ref("message");

let ws: any= null

const bus = new EventBus();

onMounted(() => {
  if(router.currentRoute.value.name === 'default'){
    classObjectName.value = 'message'
  }else{
    classObjectName.value = <string>router.currentRoute.value.name
  }
  initWebsocket()
  fetchParams()
})

/**
 * 监听消息发送的事件
 */
bus.on('sendMsg',(msg: UserMsg) => {
  const sendMsg: SendMsg = {
    TargetId: msg.dstId,
    userId: msg.userId,
    Type: 1,
    Media: msg.media,
    Content: msg.content
  }
  ws.sendMsg(sendMsg)
})

/**
 * 监听消息接收的事件
 */
bus.on('socketMsg',(msg: SendMsg) => {
  const recvMsg:UserMsg = {
    id: store.state.userMsg.userMsg.length + 1,
    userId: msg.userId,
    dstId: msg.TargetId,
    media: msg.Media,
    content: msg.Content
  }
  store.dispatch("userMsg/" + ADD_USER_MESSAGE, recvMsg)
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
  ws = await Ws.create(wsUrl + "/chat?userId="+store.state.login.id + "&token=" + store.state.login.token)
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

/**
 * 同步好友列表
 */
bus.on("addFriend", (ok) => {
  ok ? fetchParams() : ''
})

/**
 * 删除监听事件
 */

onUnmounted(() => {

})
</script>

<style lang="less" scoped>
.common-layout-content {
  height: 100vh;

  .layout-content-body{
    overflow-y: auto;
  }
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #438be5;
}
</style>
