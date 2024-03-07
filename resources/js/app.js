import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue';
import route from './router/index.js'
import router from './router/index.js';

const app = createApp(App);

app.use(router)
app.mount('#app')
