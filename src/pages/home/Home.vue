<template>
  <div class="common-layout" @click="closePopup">
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
import { onMounted, ref} from "vue";
import {getIMWsUrl} from "@/config";
import {EventBus, Ws} from "@/utils";
import { useStore} from "vuex";
import {fetchUserFriends} from "@/services";
import {SET_ONE_USER, SET_USER_FRIENDS} from "@/store/modules/friendList.ts";
import {MessageUser, SendMsg, UserMsg} from "@/type/global";
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
  wsConnect()
  fetchParams()
})

const closePopup = () => {
  bus.emit("closePopup")
}

/**
 * 监听消息发送的事件
 */
bus.on('sendMsg',(msg: UserMsg) => {
  const sendMsg: SendMsg = {
    TargetId: msg.dstId,
    UserId: msg.userId,
    Type: msg.type,
    Media: msg.media,
    Content: msg.content,
    CreateTime: msg.createTime
  }
  ws.sendMsg(sendMsg)
})

/**
 * 监听消息接收的事件
 */
bus.on('socketMsg',(msg: SendMsg) => {
  if(msg.Type === 3) return
  const recvMsg:UserMsg = {
    createTime: msg.CreateTime,
    id: store.state.userMsg.userMsg.length + 1,
    userId: msg.UserId,
    dstId: msg.TargetId,
    media: msg.Media,
    type: msg.Type,
    content: msg.Content
  }
  store.dispatch("userMsg/" + ADD_USER_MESSAGE, recvMsg)
})

function changeMenu(menuName) {
  classObjectName.value = menuName;
  router.push(`/home/${classObjectName.value}`);
}

const wsConnect = async () => {
  const wsUrl = getIMWsUrl()
  ws = Ws.create(wsUrl + "/chat?userId=" + store.state.login.id + "&token=" + store.state.login.token, wsReConnect)
}

const wsReConnect = () => {
  if (!ws){
    return wsConnect()
  }

  if(ws && ws.reconnectingTimer){
    clearTimeout(ws.reconnectingTimer)
    ws.reconnectingTimer = null
    wsConnect()
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

  const messageList: MessageUser[] = []
  Rows.forEach(data => {
    const messageUser: MessageUser = {
      id: data.ID,
      name: data.name,
      isGroup: false
    }
    messageList.push(messageUser)
  })
  if(store.state.friendList.rows.length === 0) {
    await store.dispatch("friendList/" + SET_USER_FRIENDS, messageList)
  }else{
    for (const item of messageList) {
      if(store.state.friendList.rows.filter(val => val.id === item.id).length === 0){
        await store.dispatch("friendList/" + SET_ONE_USER, item)
      }
    }
  }
}

/**
 * 同步好友列表
 */
bus.on("addFriend", (ok) => {
  ok ? fetchParams() : ''
})

bus.on("gotoMessage", () => {
  changeMenu('message')
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
