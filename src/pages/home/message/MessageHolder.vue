<template>
  <el-aside width="340px">
    <UserList>
      <ul class="el-user-list" >

      </ul>
    </UserList>
  </el-aside>
  <el-main>
    <MessageShower></MessageShower>
  </el-main>
</template>

<script setup>
import UserList from "./UserList.vue";
import MessageShower from "./MessageShower.vue";
</script>

<style lang="less" scoped>

</style>
