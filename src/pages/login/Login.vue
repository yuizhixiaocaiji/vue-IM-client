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
        <LoginFrom :loading="loading" :type="current" @finish="finish" @back="back"></LoginFrom>
      </div>
    </div>
    <div class="login_bottom"></div>
  </div>
</template>

<script setup lang="ts">
import login_bg from "@/assets/images/login_bg.png";
import LoginFrom from "./components/LoginFrom.vue";
import {onMounted, ref} from "vue";
import { FormField, Itype } from "@/type/global";
import { getUserParams, registerUser } from "@/services";
import { useStore } from "vuex";
import { SET_USER_INFO } from "@/store/modules/login";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useHistoryTravel } from "@/hooks/useHistoryTravel";
import { IM_Online_Ws_URL} from "@/config";

const store = useStore();

const router = useRouter();

const loading = ref(false)

const { current, back } = useHistoryTravel<Itype>("login");

onMounted(() => {
  localStorage.removeItem('IMWsUrl')
  import.meta.env.VITE_OUTPUT_DIR === 'pro' ? localStorage.setItem('IMWsUrl', IM_Online_Ws_URL) : ''
})

const finish = async (values?: FormField | string) => {
  try {
    if (current.value === "login") {
      if (!values) return;
      if (values === "register" || values === "modifySend") {
        toggle(values);
      } else {
        loading.value = true
        const data = await getUserParams(values);
        await store.dispatch("login/" + SET_USER_INFO, data);
        loading.value = false
        await router.push("/home");
      }
    } else if (current.value === "register") {
      loading.value = true
      await registerUser(values);
      loading.value = false
      ElMessage({
        message: "恭喜你，注册成功",
        type: "success",
      });
      back();
    }
  } catch (e: any) {
    loading.value = false
    ElMessage.error(e);
  }
};

const type = ref<Itype>("login");

function toggle(toggleType: Itype) {
  type.value = toggleType;
  current.value = toggleType;
}
</script>

<style lang="less" scoped></style>
