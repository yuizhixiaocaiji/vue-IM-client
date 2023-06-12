<template>
  <el-main>
    <ul>
      <li v-for="msg of showMsg" :key="msg.id">
        <span>{{msg.content}}</span>
      </li>
    </ul>
  </el-main>
</template>

<script setup lang="ts">
import { ref, watchEffect} from "vue";
  import {useStore} from "vuex";

  const store = useStore()

  let showMsg = ref([])

  const props = defineProps(['userToInfo'])

  watchEffect(() => {
    showMsg.value = store.state.userMsg.userMsg.filter(msg => msg.userId === store.state.login.id && msg.dstId === props.userToInfo.userId)
  })

/**
 * 更新展示的消息
 */
</script>

<style lang="less" scoped>
.el-main{
  border-bottom: 1px solid #eee;
}
</style>