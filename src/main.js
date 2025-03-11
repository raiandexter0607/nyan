import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

const app = createApp(App)

app.use(router)
app.mount('#app')

const accessToken = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"