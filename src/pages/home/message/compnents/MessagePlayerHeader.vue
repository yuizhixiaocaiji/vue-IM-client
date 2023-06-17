<template>
  <el-header>
    <section class="el-header-left">
      <MyAvatar src="ic_avatar_03" size="46"></MyAvatar>
      <div class="el-header-status">
        <span class="header-status-name">{{props.name}}</span>
        <span class="header-status-text">离线</span>
      </div>
    </section>
    <section class="el-header-right">
      <el-icon :size="20" color="#666" @click=""><Document /></el-icon>
      <el-icon :size="20" color="#666" @click=""><User /></el-icon>
      <el-icon :size="20" color="#666" @click=""><Setting /></el-icon>
    </section>
  </el-header>
</template>

<script setup lang="ts">
import MyAvatar from "@/components/MyAvatar.vue";
import {Document, Setting, User} from "@element-plus/icons-vue";

const props = defineProps(["name"])
</script>

<style lang="less" scoped>
  .el-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;

    .el-header-left{
      height: 100%;
      display: flex;
      align-items: center;
    }

    .el-header-right{
      .el-icon{
        margin-right: 20px;
        cursor: pointer;
      }
    }

    .el-header-status{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 10px;

      .header-status-name{
        font-size: 16px;
        color: #333;
      }

      .header-status-text{
        font-size: 8px;
        color: #666;
      }
    }
  }
</style>