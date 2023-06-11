<template>
  <el-aside width="340px">
    <UserList>
      <ul class="el-user-list" >
        <li class="user-list-one" v-for="row in store.state.friendList.rows" :key="row.ID">
          <MyAvatar src="ic_avatar_03"></MyAvatar>
          <div class="list-one-message">
            <span class="one-message-name">{{row.name}}</span>
            <span class="one-message-content">你们已经是好友了,快开始聊天吧~</span>
          </div>
          <div class="list-one-date">2023年6月11日</div>
        </li>
      </ul>
    </UserList>
  </el-aside>
  <el-main>
    <MessageShower></MessageShower>
  </el-main>
</template>

<script setup>
import UserList from "./UserList.vue";
import MessageShower from "./MessageShower.vue";
import {useStore} from "vuex";
import MyAvatar from "@/components/MyAvatar.vue";

const store = useStore()
</script>

<style lang="less" scoped>
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
    right: 0;
    font-size: 6px;
    color: #666;
  }
</style>
