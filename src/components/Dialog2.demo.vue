<demo>一句话打开Dialog</demo>
<template>
    <Button @click="showDialog">一句话打开Dialog</Button>
</template>
<script lang="ts">
    import { openDialog } from '../lib/openDialog'
    import { h } from 'vue'
    import Button from '../lib/Button.vue';
    export default {
        components: {Button},
        setup() {
            const ok = () => {
                console.log('ok');
                return true
            }
            const cancel = () => {
                console.log('cancel')
            }
            const showDialog = () => {
                openDialog({
                    title: h('strong', {}, '标题'),
                    content: h('div', {}, '你好'),
                    ok() { console.log('ok2'); return true },
                    cancel() { console.log('cancel2') }
                })
            }
            return { ok,cancel, showDialog }
        }
    }
</script>
