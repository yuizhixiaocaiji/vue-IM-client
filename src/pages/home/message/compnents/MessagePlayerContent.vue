<template>
  <el-main>
    <el-scrollbar style="padding-right: 15px" ref="myScrollbar">
      <div class="el-main-tag">你们已经是好友了，开始聊天吧~</div>
      <ul class="el-main-list">
        <li v-for="msg of showMsg" :key="msg.id" :class="msg.isMine ? 'main-list-own' : 'main-list-cus'">
          <template v-if="msg.isMine">
            <my-avatar src="ic_avatar_02"></my-avatar>
            <div class="list-content-holder">
              <span class="content-holder-name">{{store.state.login.name}}</span>
              <div class="content-holder-msg" >
                <span v-if="msg.media === 1">{{msg.content}}</span>
                <img :src="msg.content" alt="" v-if="msg.media === 4">
              </div>
            </div>
          </template>
          <template v-if="!msg.isMine">
            <my-avatar src="ic_avatar_03"></my-avatar>
            <div class="list-content-holder">
              <span class="content-holder-name">{{userToInfo.userName}}</span>
              <div class="content-holder-msg" >
                <span v-if="msg.media === 1">{{msg.content}}</span>
                <img :src="msg.content" alt="" v-if="msg.media === 4">
              </div>
            </div>
          </template>
        </li>
      </ul>
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
import {nextTick, ref, watchEffect} from "vue";
import {useStore} from "vuex";
import MyAvatar from "@/components/MyAvatar.vue";
import {UserMsg} from "@/type/global";
import {EventBus} from "@/utils";

  const store = useStore()
  const bus = new EventBus();

  let showMsg = ref<UserMsg[]>([])

  const props = defineProps(['userToInfo'])

  const myScrollbar = ref()

  watchEffect(() => {
    showMsg.value = store.state.userMsg.userMsg.filter(msg => (msg.userId === store.state.login.id && msg.dstId === props.userToInfo.userId) || (msg.dstId === store.state.login.id && msg.userId === props.userToInfo.userId))
    showMsg.value.forEach(value => {
      value.isMine = value.userId === store.state.login.id
    })
  })

  /**
    * 监听消息发送的事件
    */
  bus.on('sendMsg',() => {
    scrollToBottom()
  })


  /**
    * 监听消息接收的事件
    */
  bus.on('socketMsg',() => {
    scrollToBottom()
  })

  const scrollToBottom = () => {
    nextTick(() => {
      const el = myScrollbar.value.$el.querySelector('.el-scrollbar__wrap');
      el.scrollTop = el.scrollHeight;
    });
  }

</script>

<style lang="less" scoped>
.el-main{
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: flex-end;
  padding-top: 0;
  padding-right: 0;
  padding-bottom: 0;

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
        margin-right: 10px;
        align-items: flex-end;
      }

      .content-holder-msg{
        background: #D2E3F9;
      }
    }

    .main-list-cus{
      .list-content-holder{
        margin-left: 10px;
      }

      .content-holder-msg{
        background: #FFEDED;
      }
    }

    .main-list-own, .main-list-cus{

      .list-content-holder{
        display: flex;
        flex-direction: column;

        .content-holder-name{
          font-size: 13px;
          color: #999;
          margin-bottom: 6px;
        }

        .content-holder-msg{
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