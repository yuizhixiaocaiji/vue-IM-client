<template>
  <el-aside width="340px">
    <UserList>
      <ul class="el-user-list" >
        <li class="user-list-one" v-for="item in consMenuList" :key="item.idx">
          <img :src="item.icon" alt="" :style="{ backgroundColor: item.bgc }" class="contact-img">
          <span class="contact-text">{{item.title}}</span>
        </li>
      </ul>
    </UserList>
  </el-aside>
  <el-main></el-main>
</template>

<script setup>
import UserList from "@/pages/home/message/UserList.vue";
import my_friend from "@/assets/images/my_friend.png";
import my_group from "@/assets/images/my_group.png";
import new_friend from "@/assets/images/new_friend.png";
import new_group from "@/assets/images/new_group.png";
import nomal_cons from "@/assets/images/nomal_cons.png";

const consMenuList = [
  {
    title: "常用联系人",
    icon: nomal_cons,
    bgc: "#FEC757",
    idx: 0,
    suffix: "nc",
  },
  {
    title: "新的好友",
    icon: new_friend,
    bgc: "#428BE5",
    idx: 1,
    suffix: "nf",
  },
  {
    title: "新的群组",
    icon: new_group,
    bgc: "#428BE5",
    idx: 2,
    suffix: "ng",
  },
  {
    title: "我的好友",
    icon: my_friend,
    bgc: "#428BE5",
    idx: 3,
    suffix: "mf",
  },
  {
    title: "我的群组",
    icon: my_group,
    bgc: "#53D39C",
    idx: 4,
    suffix: "mg",
  },
];
</script>

<style lang="less" scoped>
.contact-img{
  width: 40px;
  border-radius: 4px;
  margin-right: 15px;
}

.contact-text{
  font-size: 14px;
  font-weight: 200;
  color: #333
}
</style>
