<template>
  <div class="search-bar">
    <el-icon><Search /></el-icon>搜索
  </div>
  <el-icon color="#ffffff" size="20px" style="margin-left: 20px"
    ><Plus
  /></el-icon>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.search-bar {
  width: 30vw;
  padding: 2px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: #5eacf1;
  color: #d2e3f8;
  cursor: pointer;
}
</style>
