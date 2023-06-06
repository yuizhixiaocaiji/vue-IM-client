import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/login/Login.vue";
import Home from "../pages/home/Home.vue";
import MessageHolder from "@/pages/home/message/MessageHolder.vue";
import ContactsHolder from "@/pages/home/contacts/ContactsHolder.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        name: "message",
        component: MessageHolder,
      },
      {
        path: "message",
        name: "message",
        component: MessageHolder,
      },
      {
        path: "contacts",
        name: "contacts",
        component: ContactsHolder,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
