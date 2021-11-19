import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // automatically chooses index file

createApp(App).use(router).mount('#app')
