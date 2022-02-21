import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import { h } from 'vue'
const markdown = (pathName) => {
    return `../markdown/${pathName}.md`
}
const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc,
            children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: h(Markdown, { path: markdown('intro'), key: 'intro' }) },
                { path: 'install', component: h(Markdown, { path: markdown('install'), key: 'install' }) },
                { path: 'get-started', component: h(Markdown, { path: markdown('get-started'), key: 'get-started' }) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]}
    ]
})
