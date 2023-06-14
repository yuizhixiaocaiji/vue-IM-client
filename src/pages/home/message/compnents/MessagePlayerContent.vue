<template>
  <el-main>
    <el-scrollbar style="padding-right: 15px">
      <div class="el-main-tag">你们已经是好友了，开始聊天吧~</div>
      <ul class="el-main-list">
        <li v-for="msg of showMsg" :key="msg.id" :class="msg.userId === store.state.login.id ? 'main-list-own' : 'main-list-cus'">
          <my-avatar src="ic_avatar_02"></my-avatar>
          <div class="list-content-holder">
            <span class="content-holder-name">{{store.state.login.name}}</span>
            <span class="content-holder-msg">{{msg.content}}</span>
          </div>
        </li>
      </ul>
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
import { ref, watchEffect} from "vue";
  import {useStore} from "vuex";
import MyAvatar from "@/components/MyAvatar.vue";

  const store = useStore()

  let showMsg = ref([])

  const props = defineProps(['userToInfo'])

  watchEffect(() => {
    showMsg.value = store.state.userMsg.userMsg.filter(msg => msg.userId === store.state.login.id && msg.dstId === props.userToInfo.userId)
  })
</script>

<style lang="less" scoped>
.el-main{
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: flex-end;
  padding: 0;

  .el-scrollbar{
    width: 100%;
  }

  &-tag{
    text-align: center;
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }

  &-list{
    display: flex;
    flex-direction: column;
    width: 100%;

    li{
      display: flex;

      width: 100%;
      margin-bottom: 20px;
    }

    .main-list-own{
      flex-direction: row-reverse;

      .list-content-holder{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 10px;

        .content-holder-name{
          font-size: 13px;
          color: #999;
          margin-bottom: 6px;
        }

        .content-holder-msg{
          background: #D2E3F9;
          padding: 10px;
          border-radius: 4px;
          font-size: 14px;
          color: #333;
        }
      }

    }
  }
}
</style>