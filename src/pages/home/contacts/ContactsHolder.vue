<template>
  <el-aside width="340px">
    <UserList>
      <ul class="el-user-list" >
        <li class="user-list-one"
            v-for="item in consMenuList"
            :key="item.idx" @click="checkMenu(item.idx)"
            :class="item.idx === activeMenu.idx && 'active'">
          <img :src="item.icon" alt="" :style="{ backgroundColor: item.bgc }" class="contact-img">
          <span class="contact-text">{{item.title}}</span>
        </li>
      </ul>
    </UserList>
  </el-aside>
  <el-main>
    <contacts-shower></contacts-shower>
  </el-main>
</template>

<script setup lang="ts">
import UserList from "@/pages/home/message/UserList.vue";
import my_friend from "@/assets/images/my_friend.png";
import my_group from "@/assets/images/my_group.png";
import new_friend from "@/assets/images/new_friend.png";
import new_group from "@/assets/images/new_group.png";
import nomal_cons from "@/assets/images/nomal_cons.png";
import {onMounted, ref} from "vue";
import ContactsShower from "@/pages/home/contacts/ContactsShower.vue";
import {ContactsMenu} from "@/type/keys.d.ts";
import {EventBus} from "@/utils";

const bus = new EventBus()

onMounted(() => {
  checkMenu(Number(localStorage.getItem("activeMenuIdx")))
})

let activeMenu = ref<ContactsMenu>({
  title: '',
  icon: '',
  bgc: '',
  idx: 9999,
})

let consMenuList: Array<ContactsMenu> = [
  {
    title: "常用联系人",
    icon: nomal_cons,
    bgc: "#FEC757",
    idx: 0,
  },
  {
    title: "新的好友",
    icon: new_friend,
    bgc: "#428BE5",
    idx: 1,
  },
  {
    title: "新的群组",
    icon: new_group,
    bgc: "#428BE5",
    idx: 2,
  },
  {
    title: "我的好友",
    icon: my_friend,
    bgc: "#428BE5",
    idx: 3,
  },
  {
    title: "我的群组",
    icon: my_group,
    bgc: "#53D39C",
    idx: 4,
  },
];

const checkMenu = (index) => {
  activeMenu.value = <ContactsMenu>consMenuList.find(item => item.idx === index)
  localStorage.setItem("activeMenuIdx", activeMenu.value.idx.toString())
  bus.emit("changeMenu", activeMenu.value)
}

</script>

<style lang="less" scoped>
.el-main{
  display: flex;
  flex-direction: column;
  padding: 0;
}

.contact-img{
  width: 40px;
  border-radius: 4px;
  margin-right: 15px;
}

.contact-text{
  font-size: 14px;
  font-weight: 500;
  color: #333
}
</style>
