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
import LoginFrom from "./components/LoginFrom.vue";
import { ref, watchEffect } from "vue";
import { FormField, Itype } from "../../type/global";
import { getUserParams } from "../../services";
import { useStore } from "vuex";
import { SET_USER_INFO } from "@/store/modules/login";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const store = useStore();

const router = useRouter();

const finish = async (values?: FormField | string) => {
  try {
    if (type.value === "login") {
      const data = await getUserParams(values);
      store.dispatch(SET_USER_INFO, data);
      router.push("/home");
    }
  } catch (e: any) {
    ElMessage.error(e);
  }
};

const type = ref<Itype>("login");
const lastType = ref(type.value);
watchEffect(() => {
  lastType.value = type.value;
});
</script>

<style lang="less" scoped></style>
