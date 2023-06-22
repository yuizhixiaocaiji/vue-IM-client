<template>
  <div class="layout-header-holder">
    <MyAvatar src="ic_avatar_02" :size="36"></MyAvatar>
    <span class="header-holder-name">{{store.state.login.name}}</span>
  </div>
  <ul class="layout-option-list">
    <li @click="$emit('openUserInfo')"><span>我的信息</span><el-icon><ArrowRight /></el-icon></li>
    <li><span>退出登录</span><el-icon><ArrowRight /></el-icon></li>
  </ul>

</template>

<script setup lang="ts">
import MyAvatar from "@/components/MyAvatar.vue";
import {useStore} from "vuex";
import {ArrowRight} from "@element-plus/icons-vue";

const store = useStore()

defineEmits(["openUserInfo"])
</script>

<style lang="less" scoped>
.layout-header-holder{
  height: 60px;
  display: flex;
  align-items: center;
  background: #428be5;
  padding-left: 10px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  .header-holder-name{
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
    font-weight: bold;
  }
}

.layout-option-list{
  li{
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;

    &:hover{
      background: #f4f4f4;
    }
  }
}
</style>