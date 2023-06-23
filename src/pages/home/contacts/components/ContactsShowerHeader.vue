<template>
  <header>
    <span class="layout-header-name">{{activeMenu.title}}</span>
  </header>
</template>

<script setup lang="ts">
import {EventBus} from "@/utils";
import {ref} from "vue";
import {ContactsMenu} from "@/type/keys";
import {onUnmounted} from "vue-demi";

const bus = new EventBus()

let activeMenu = ref<ContactsMenu>({
  title: '',
  icon: '',
  bgc: '',
  idx: 9999,
})

const changHeader = (data) => {
  activeMenu.value = data
}

bus.on("changeMenu", changHeader)

onUnmounted(() => {
  bus.off("changeMenu", changHeader)
})
</script>

<style lang="less" scoped>
header{
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 20px;
  .layout-header-name{
    font-size: 18px;
    color: #666;
  }
}
</style>