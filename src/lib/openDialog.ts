import { h, createApp } from 'vue'
import Dialog from './Dialog.vue';
export const openDialog = (options) => {
    const { title, content, ok, cancel } = options
    const close = () => {
        app.unmount()
        div.remove()
    }
    const div = document.createElement('div')
    document.body.appendChild(div)
    // h 函数接收三个参数 1 为标签名 2 为props 3 为 children
    const app = createApp({
        render() {
            return h(Dialog,
            {
                visible: true,
                'onUpdate:visible': () => {
                    close()
                },
                closeOnClickOverlay: false,
                ok,
                cancel
            }, { title, content })
        }
    })
    app.mount(div)
}
