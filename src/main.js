import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Single from "./components/Single.vue";
import HomeView from "./views/HomeView.vue";
import Registration from "./components/Registration.vue";
import Phone from "./components/Phone.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/single", component: Single },
  { path: "/registration", component: Registration },
  { path: "/phone", component: Phone },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const id = Date.now()
const app = createApp(App);
app.use(router);
app.mount("#app");
// createApp(App).mount('#app')
