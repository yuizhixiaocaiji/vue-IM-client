<template>
  <el-aside width="340px">
    <UserList></UserList>
  </el-aside>
  <el-main>
    <MessageShower></MessageShower>
  </el-main>
</template>

<script setup>
import UserAsideBar from "../components/UserAsideBar.vue";
import UserList from "./UserList.vue";
import MessageShower from "./MessageShower.vue";
</script>

<style lang="less" scoped>
.el-aside {
  border-right: 1px solid #eee;
}
</style>
