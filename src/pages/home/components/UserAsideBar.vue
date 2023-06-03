<template>
  <article class="layout-aside-child">
    <MyAvatar :src="'ic_avatar_02'"></MyAvatar>
  </article>
</template>

<script setup>
import MyAvatar from "@/components/MyAvatar.vue";
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
</style>
