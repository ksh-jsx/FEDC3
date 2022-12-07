import { createApp } from "vue";
import App from "./App.vue";
import fethPlugin from "./plugins/fetch.js";

const app = createApp(App);
app.use(fethPlugin);
app.mount("#app");
