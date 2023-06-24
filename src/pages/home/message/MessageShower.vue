<template>
  <section class="content_bg" v-if="userMessage.userId === 0">
    <div class="content_bg_title">创建群聊</div>
    <div class="content_bg_sub">创建群组，立即开启在线办公</div>
    <img :src="home_bg" alt="">
    <el-button class="content_bg_btn" type="primary" @click="isOpenPop = true" >立即创建</el-button>
  </section>

  <community-create-popup :is-open-popup="isOpenPop" @close-popup="isOpenPop = false"></community-create-popup>

  <el-container v-if="userMessage.userId !== 0">
    <MessagePlayerHeader :userToInfo="userMessage"></MessagePlayerHeader>
    <MessagePlayerContent :userToInfo="userMessage"></MessagePlayerContent>
    <MessagePlayerFooter :userToInfo="userMessage"></MessagePlayerFooter>
  </el-container>
</template>

<script setup lang="ts">
import home_bg from "@/assets/images/home_bg.png";
import MessagePlayerHeader from "@/pages/home/message/compnents/MessagePlayerHeader.vue";
import MessagePlayerContent from "@/pages/home/message/compnents/MessagePlayerContent.vue";
import MessagePlayerFooter from "@/pages/home/message/compnents/MessagePlayerFooter.vue";
import CommunityCreatePopup from "@/pages/home/message/compnents/CommunityCreatePopup.vue";
import {ref, watch} from "vue";
import {RedisMsg} from "@/type/api.js";
import {useStore} from "vuex";
import {redisMsg} from "@/services/index.js";

const props = defineProps(["userMessage"])

const store = useStore()

const isOpenPop = ref(false)

const isReadRedisMsg = ref<string[]>([])

watch(props.userMessage, async () => {
  const apiParams: RedisMsg = {
    userIdA: store.state.login.id.toString(),
    userIdB: props.userMessage.userId.toString(),
  }

  if(isReadRedisMsg.value.filter(item => item === apiParams.userIdB).length <= 0){
    isReadRedisMsg.value.push(apiParams.userIdB)
    await redisMsg(apiParams)
  }
})

</script>

<style lang="less" scoped>
.content_bg{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &_title {
    font-size: 20px;
    font-weight: 500;
  }

  &_sub {
    color: #777;
    padding-top: 20px;
    padding-bottom: 60px;
  }

  &_btn {
    margin-top: 120px;
    width: 120px;
    border-radius: 6px !important;
  }
}

.el-container{
  height:100%;
  display: flex;
  flex-direction: column;
}
</style>
