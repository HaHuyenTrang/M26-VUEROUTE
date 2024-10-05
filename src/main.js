import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers"

// createApp(App).use(router).mount('#app') b1

const app = createApp(App);

app.use(router);

app.mount("#app")