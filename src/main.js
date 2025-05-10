// main.js
// import "mazer/assets/css/main/app.css";
// import "mazer/assets/extensions/bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
