<template>
  <h1>Hello world</h1>
</template>

<script setup>
import axios from "axios";

axios.get("/api/user/getUserList").then((res) => {
  console.log(res);
});
</script>

<style lang="sass" scoped></style>
