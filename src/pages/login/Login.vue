<template>
  <div class="login_container">
    <div class="top_bar"></div>
    <div class="login_wapper">
      <div class="center_container">
        <div class="left_container">
          <div class="title">互联，互动</div>
          <span class="sub_title">海内存知己，天涯若比邻</span>
          <img :src="login_bg" alt="" />
        </div>
        <LoginFrom :finish="finish" :type="lastType"></LoginFrom>
      </div>
    </div>
    <div class="login_bottom"></div>
  </div>
</template>

<script setup lang="ts">
import login_bg from "@/assets/images/login_bg.png";
import LoginFrom, { FormField } from "./components/LoginFrom.vue";
import { ref, watchEffect } from "vue";
import { Itype } from "../../type/global";

const finish = (values?: FormField | string) => {
  console.log(values);
};

const type = ref<Itype>("login");
const lastType = ref(type.value);
watchEffect(() => {
  lastType.value = type.value;
});
</script>

<style lang="less" scoped></style>
