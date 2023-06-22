<template>
  <article class="layout-aside-child">
    <el-popover
        placement="right-start"
        :width="230"
        popper-style="padding: 0;"
        :visible="isShowPop"
    >
      <template #reference>
        <MyAvatar :src="'ic_avatar_02'" :size="36" @click="isShowPop = true"></MyAvatar>
      </template>
      <template #default>
        <user-option-card @openUserInfo="isShowPop = false"></user-option-card>
      </template>
    </el-popover>

    <user-popup-card :openMyMessage="!isShowPop"></user-popup-card>

    <ul class="layout-tool-tip">
      <li :class="msgIsActive" @click="$emit('changeMenu', 'message')">
        <el-icon size="18px" color="#999"><Comment /></el-icon
        ><span class="tool-tip-text">消息</span>
      </li>
      <li :class="catIsActive" @click="$emit('changeMenu', 'contacts')">
        <el-icon size="18px" color="#999"><UserFilled /></el-icon
        ><span class="tool-tip-text">联系人</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
import MyAvatar from "@/components/MyAvatar.vue";
import { computed,ref } from "vue";
import {Comment, UserFilled} from "@element-plus/icons-vue";
import UserOptionCard from "@/pages/home/components/UserOptionCard.vue";
import UserPopupCard from "@/pages/home/components/UserPopupCard.vue";

const props = defineProps(["classObjectName"]);

const emit = defineEmits(["changeMenu"]);

const msgIsActive = computed(() => {
  return props.classObjectName === "message" ? "active" : "";
});

const catIsActive = computed(() => {
  return props.classObjectName === "contacts" ? "active" : "";
});

const isShowPop = ref(false)

</script>

<style lang="less" scoped>
.layout-aside-child {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 100%;
  background: #f4f4f4;
  padding-top: 20px;
}

.layout-tool-tip {
  padding-top: 20px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 4px;
    padding: 5px;
    cursor: pointer;

    span {
      font-size: 12px;
    }
  }
}
.tool-tip-text {
  color: #515e70;
}

.active {
  background: #e4e4e4;

  .el-icon,
  .tool-tip-text {
    color: #428be5;
  }
}
</style>
