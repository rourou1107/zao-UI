import { createApp } from 'vue'
import App from './App.vue'
import Text from './components/Text.vue'
import Home from './components/Home.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Text },
        { path: '/home', component: Home }
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
