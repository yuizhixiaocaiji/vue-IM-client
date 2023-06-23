<template>
  <el-aside width="340px">
    <UserList>
      <ul class="el-user-list" >
        <li class="user-list-one" v-for="row in store.state.friendList.rows" :key="row.id" @click="openMessagePlayer(row)" :class="userMessage.userId === row.id && 'active'">
          <MyAvatar src="ic_avatar_03" v-if="!row.isGroup"></MyAvatar>
          <MyAvatar :src="my_group" v-if="row.isGroup"></MyAvatar>
          <div class="list-one-message">
            <span class="one-message-name">{{row.name}}</span>
            <span class="one-message-content" v-if="!row.isGroup">你们已经是好友了,快开始聊天吧~</span>
          </div>
          <div class="list-one-date">2023年6月11日</div>
        </li>
      </ul>
    </UserList>
  </el-aside>
  <el-main>
    <MessageShower :user-message="userMessage"></MessageShower>
  </el-main>
</template>

<script setup>
import UserList from "./UserList.vue";
import MessageShower from "./MessageShower.vue";
import {useStore} from "vuex";
import MyAvatar from "@/components/MyAvatar.vue";
import {reactive} from "vue";
import my_group from "@/assets/images/my_group.png"

const store = useStore()

const userMessage = reactive({
  userName: '',
  userId: 0,
  isGroup: false
})//当前操作的user

const openMessagePlayer = (row) => {
  userMessage.userName = row.name
  userMessage.userId = row.id
  userMessage.isGroup = row.isGroup
}
</script>

<style lang="less" scoped>
  .el-main{
    padding: 0;
  }

  .list-one-message{
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;

    .one-message-name{
      font-size: 14px;
      color: #333;
    }

    .one-message-content{
      font-size: 8px;
      color: #666;
    }
  }

  .list-one-date{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 6px;
    color: #666;
  }
</style>
