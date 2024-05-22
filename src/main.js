import { createApp } from 'vue'
import Router from './tools/Router.js'
import Store from './tools/Storage.js'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.use(Router)
app.use(Store)
app.use(ElementPlus)
app.mount('#app')