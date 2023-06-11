<template>
  <el-footer>
    <section class="el-footer-icon">
      <el-icon :size="20" color="#666"><CirclePlus /></el-icon>
      <el-icon :size="20" color="#666"><Picture /></el-icon>
      <el-icon :size="20" color="#666"><Film /></el-icon>
      <el-icon :size="24" color="#666"><Postcard /></el-icon>
      <el-icon :size="22" color="#666"><FolderOpened /></el-icon>
      <el-icon :size="20" color="#666"><Microphone /></el-icon>
    </section>
    <section class="el-footer-input">
      <el-input
          v-model="textarea"
          :rows="5"
          type="textarea"
          placeholder="发送给"
          resize="none"
      />
    </section>
    <section class="el-footer-button">
      <el-button :disabled="textarea===''">发送</el-button>
    </section>
  </el-footer>
</template>

<script setup lang="ts">
import {CirclePlus, Film, FolderOpened, Microphone, Postcard} from "@element-plus/icons-vue";
import {ref} from "vue";

const textarea = ref('')
</script>

<style lang="less" scoped>
  .el-footer{
    display: flex;
    flex-direction: column;
    height: 200px;
    padding-top: 10px;

    &-icon{
      display: flex;
      align-items: center;
      margin-bottom: 5px;

      .el-icon{
        margin-right: 10px;
        cursor: pointer;
      }
    }
    
    &-input{
      flex: 1;
    }

    &-button{
      padding-bottom: 8px;
      display: flex;
      justify-content: flex-end;

      .el-button{
        width: 100px;
      }
    }
  }
</style>