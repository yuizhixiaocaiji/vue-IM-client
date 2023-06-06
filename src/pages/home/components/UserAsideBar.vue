<template>
  <article class="layout-aside-child">
    <MyAvatar :src="'ic_avatar_02'" :size="36"></MyAvatar>
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
import { ref, computed, watch } from "vue";

const props = defineProps(["classObjectName"]);

const emit = defineEmits(["changeMenu"]);

const msgIsActive = computed(() => {
  return props.classObjectName === "message" ? "active" : "";
});

const catIsActive = computed(() => {
  return props.classObjectName === "contacts" ? "active" : "";
});
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
