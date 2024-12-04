import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "ant-design-vue/dist/reset.css";
import VueFullPage from "vue-fullpage.js";
import "vue-fullpage.js/dist/style.css";

const app = createApp(App);

// 设置默认主题为白天模式
const savedTheme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);

app.use(router);
app.use(VueFullPage);

app.mount("#app");
