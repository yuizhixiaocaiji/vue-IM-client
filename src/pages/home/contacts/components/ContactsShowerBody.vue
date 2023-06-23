<template>
  <section class="layout-content-body">
    <ul class="content-body-community">
      <li v-for="data of dataList" :key="data.ID">
        <img :src="my_group" alt="" style="background-color: #53D39C; width: 32px; border-radius: 4px; margin-right: 10px">
        <span class="body-community-name">{{data.Name}}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import my_group from "@/assets/images/my_group.png";

const props = defineProps(["dataList"])

</script>

<style lang="less" scoped>
.layout-content-body{
  flex: 1
}

.content-body-community{
  width: 100%;

  li{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0 20px 20px;

    .body-community-name{
      font-size: 14px;
    }

    &:hover{
      background: #f4f4f4;
    }
  }
}
</style>