import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/fonts/iconfont/iconfont.css"
import App from "./App.vue";
import router from "./route";
import store from "./store";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(store);

app.use(router);

app.use(ElementPlus);

app.mount("#app");
