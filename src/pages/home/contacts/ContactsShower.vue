<template>
<contacts-shower-header></contacts-shower-header>
  <contacts-shower-body :dataList="dataList"></contacts-shower-body>
</template>

<script setup lang="ts">
import ContactsShowerHeader from "@/pages/home/contacts/components/ContactsShowerHeader.vue";
import {EventBus} from "@/utils";
import {onUnmounted} from "vue-demi";
import {loadCommunity} from "@/services";
import {LoadCommunity} from "@/type/api";
import {useStore} from "vuex";
import ContactsShowerBody from "@/pages/home/contacts/components/ContactsShowerBody.vue";
import {ref} from "vue";

const bus = new EventBus()

const store = useStore()

const dataList = ref<any[]>([])

const fetchData = async (data) => {
  const {idx} = data
  switch (idx){
    case 0:
      break
    case 1:
      break
    case 2:
      break
    case 3:
      break
    case 4:
      const apiParams: LoadCommunity = {
        ownerId: store.state.login.id
      }
      const data = await loadCommunity(apiParams)
      const {Rows} = data
      dataList.value = Rows
      break
  }
}

bus.on("changeMenu", fetchData)

onUnmounted(() => {
  bus.off("changeMenu", fetchData)
})
</script>

<style lang="less" scoped>
header{

}
</style>