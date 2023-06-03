<template>
  <div class="common-layout">
    <el-container>
      <el-header height="42px">
        <SearchBar></SearchBar>
      </el-header>
      <el-container>
        <el-aside width="400px">
          <UserAsideBar></UserAsideBar>
          <UserList></UserList>
        </el-aside>
        <el-main>
          <MessageShower></MessageShower>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SearchBar from "../../components/SearchBar.vue";
import UserAsideBar from "./components/UserAsideBar.vue";
import UserList from "./message/UserList.vue";
import MessageShower from "./message/MessageShower.vue";
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
