import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../pages/login/Login.vue";
import Home from "../pages/home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
