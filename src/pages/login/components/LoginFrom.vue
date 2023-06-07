<template>
  <el-card
    shadow="always"
    class="login_from"
    :body-style="{ padding: '47px 44px' }"
    v-loading="$props.loading"
  >
    <div v-if="backSts" class="back-button" @click="$emit('back')">
      <el-icon><ArrowLeft /></el-icon>
      <span>返回</span>
    </div>
    <section
      v-if="type === 'login' || type === 'register' || type === 'modifySend'"
    >
      <div class="form_title">
        {{ type === "modifySend" ? "忘记密码" : `欢迎使用GoIM` }}
      </div>
      <el-form
        label-position="top"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="formLabelAlign.password"
            show-password
          />
        </el-form-item>
        <el-form-item label="再次输入密码" v-if="type === 'register'">
          <el-input
            type="password"
            v-model="formLabelAlign.rePassword"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(type)">{{
            type === "login"
              ? "登录"
              : type === "register"
              ? "注册"
              : type === "modifySend"
              ? "获取验证码"
              : null
          }}</el-button>
        </el-form-item>
      </el-form>
    </section>
    <div v-if="btmSts">
      <div class="bottom-set">
        <el-checkbox
          v-model="checkSts"
          size="large"
          style="margin-right: 5px"
        />
        <div style="font-size: 12px">
          我已阅读并同意<span class="primary">用户协议</span>和<span
            class="primary"
            >隐私协议</span
          >
        </div>
      </div>
      <div v-if="type === 'login'" class="access_bottom">
        <span>忘记密码</span>
        <span @click="$emit('finish', 'register')">立即注册</span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { reactive, ref, watchEffect } from "vue";
import { FormField, Itype } from "@/type/global";
import {ArrowLeft} from "@element-plus/icons-vue";

const props = defineProps(["type","loading"]);
const emit = defineEmits(["finish", "back"]);

const [btmSts, setBtm] = useToggle();
const [backSts, setBack] = useToggle();

const checkSts = ref<boolean>(true);

const formLabelAlign = reactive<FormField>({
  name: "",
  password: "",
  rePassword: "",
});

watchEffect(() => {
  const btmShow = ["login", "register"];
  const backShow = ["register", "vericode", "modifySend", "modifycode"];
  setBtm(btmShow.includes(props.type!));
  setBack(backShow.includes(props.type!));
});

function onSubmit(type?: Itype) {
  if (!checkSts) return;
  if (type === "login" || type === "register") {
    emit("finish", formLabelAlign);
  }
}
</script>

<style lang="less" scoped>
.back-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  font-size: 12px;
  color: #777;
  cursor: pointer;
}

.bottom-set {
  display: flex;
  align-items: center;
}
</style>
