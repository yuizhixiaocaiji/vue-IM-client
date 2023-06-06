<template>
  <el-avatar
    shape="square"
    fit="cover"
    :src="mySrc"
    :style="{ minWidth: `${props.size ?? 42}px` }"
  />
</template>

<script setup>
import ic_avatar_01 from "@/assets/images/ic_avatar_01.png";
import ic_avatar_02 from "@/assets/images/ic_avatar_02.png";
import ic_avatar_03 from "@/assets/images/ic_avatar_03.png";
import ic_avatar_04 from "@/assets/images/ic_avatar_04.png";
import ic_avatar_05 from "@/assets/images/ic_avatar_05.png";
import ic_avatar_06 from "@/assets/images/ic_avatar_06.png";
import { reactive } from "vue";

const props = defineProps(["size", "src"]);

let mySrc;

const localList = reactive({
  ic_avatar_01: ic_avatar_01,
  ic_avatar_02: ic_avatar_02,
  ic_avatar_03: ic_avatar_03,
  ic_avatar_04: ic_avatar_04,
  ic_avatar_05: ic_avatar_05,
  ic_avatar_06: ic_avatar_06,
});

if (Object.keys(localList).includes(props.src)) {
  mySrc = localList[props.src];
} else {
  mySrc = props.src;
}
</script>

<style lang="less" scoped></style>
