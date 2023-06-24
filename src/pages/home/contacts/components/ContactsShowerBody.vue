<template>
  <section class="layout-content-body">
    <ul class="content-body-community" v-if="activeMenu.idx === 4">
      <li v-for="data of dataList" :key="data.ID" @dblclick="clickCommunity(data)">
        <img :src="my_group" alt="" style="background-color: #53D39C; width: 32px; border-radius: 4px; margin-right: 10px">
        <span class="body-community-name">{{data.Name}}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import my_group from "@/assets/images/my_group.png";
import {EventBus} from "@/utils";
import {ref} from "vue";
import {ContactsMenu} from "@/type/keys";
import {onUnmounted} from "vue-demi";
import {SET_ONE_USER, SET_USER_FRIENDS} from "@/store/modules/friendList.ts";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {MessageUser} from "@/type/global";

const props = defineProps(["dataList"])

const bus = new EventBus()

const store = new useStore()

const router = useRouter()

let activeMenu = ref<ContactsMenu>({
  title: '',
  icon: '',
  bgc: '',
  idx: 9999,
})

const changBody = (data) => {
  activeMenu.value = data
}

bus.on("changeMenu", changBody)

const clickCommunity = async (Row) => {
  const messageUser: MessageUser = {
    id: Row.ID,
    name: Row.Name,
    isGroup: true
  }
  const groupList = store.state.friendList.rows.filter(item => item.isGroup === true)
  if(groupList.length ===0 || !groupList.find(val => val.id === messageUser.id)){
    await store.dispatch("friendList/" + SET_ONE_USER, messageUser)
  }
  bus.emit("gotoMessage")
}

onUnmounted(() => {
  bus.off("changeMenu", changBody)
})
</script>

<style lang="less" scoped>
.layout-content-body{
  flex: 1
}

.content-body-community{
  width: 100%;

  li{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0 20px 20px;

    .body-community-name{
      font-size: 14px;
    }

    &:hover{
      background: #f4f4f4;
    }
  }
}
</style>