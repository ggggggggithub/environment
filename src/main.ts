import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import vuetify from './plugin/vuetify.js'
const app = createApp(App)

app.use(vuetify, createPinia())

app.mount('#app')
