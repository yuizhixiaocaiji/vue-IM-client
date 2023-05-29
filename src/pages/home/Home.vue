<template>
  <div class="common-layout">
    <el-container>
      <el-header height="42px">
        <SearchBar></SearchBar>
      </el-header>
      <el-container>
        <el-aside width="400px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "../../components/SearchBar.vue";
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #438be5;
}

.el-aside {
  background: pink;
}
</style>
