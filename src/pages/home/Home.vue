<template>
  <div class="common-layout">
    <el-container>
      <el-header height="42px">
        <SearchBar></SearchBar>
      </el-header>
      <el-container>
        <UserAsideBar
          :classObjectName="classObjectName"
          @changeMenu="changeMenu"
        ></UserAsideBar>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import UserAsideBar from "./components/UserAsideBar.vue";
import SearchBar from "../../components/SearchBar.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const classObjectName = ref("message");

classObjectName.value = <string>router.currentRoute.value.name;

function changeMenu(menuName) {
  classObjectName.value = menuName;
  router.push(`/home/${classObjectName.value}`);
}
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
</style>
