<template>
  <section class="content_bg" v-if="userMessage.userId === 0">
    <div class="content_bg_title">创建群聊</div>
    <div class="content_bg_sub">创建群组，立即开启在线办公</div>
    <img :src="home_bg" alt="">
    <el-button class="content_bg_btn" type="primary">立即创建</el-button>
  </section>

  <el-container v-if="userMessage.userId !== 0">
    <MessagePlayerHeader :name="userMessage.userName"></MessagePlayerHeader>
    <MessagePlayerContent :userToInfo="userMessage"></MessagePlayerContent>
    <MessagePlayerFooter :userId="userMessage.userId"></MessagePlayerFooter>
  </el-container>
</template>

<script setup>
import home_bg from "@/assets/images/home_bg.png";
import {watch} from "vue";
import MessagePlayerHeader from "@/pages/home/message/compnents/MessagePlayerHeader.vue";
import MessagePlayerContent from "@/pages/home/message/compnents/MessagePlayerContent.vue";
import MessagePlayerFooter from "@/pages/home/message/compnents/MessagePlayerFooter.vue";

const props = defineProps(["userMessage"])

watch(props.userMessage ,(newValue)=> {

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
