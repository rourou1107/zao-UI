import { createApp } from 'vue'
import './lib/gulu.scss'
import './index.scss'
import 'github-markdown-css'
import App from './App.vue'
import {router} from './router';

const app = createApp(App)
app.use(router)
app.mount('#app')
