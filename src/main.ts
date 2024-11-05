import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import vuetify from './plugin/vuetify.js'
const app = createApp(App)
const pinia = createPinia()

//app.use(vuetify)
app.use(pinia)

app.mount('#app')
