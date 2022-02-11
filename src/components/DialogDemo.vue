<template>
    <Button @click="toggle">切换dialog</Button>
    <Dialog v-model:visible="visible" :ok="ok" :cancel="cancel" :closeOnClickOverlay="false">
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
        <template v-slot:content>
            <div>第一行</div>
            <label>
                <textarea v-model="inputValue"/>
            </label>
        </template>
    </Dialog>
</template>
<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import { ref } from 'vue'
    export default {
        components: {Button, Dialog },
        setup() {
            const visible = ref(false)
            const inputValue = ref('我是输入框')
            const toggle = () => {
                visible.value = !visible.value
            }
            const ok = () => {
                console.log('ok');
                return true
            }
            const cancel = () => {
                console.log('cancel')
            }
            return { toggle, visible, ok, cancel, inputValue }
        }
    }
</script>
<style lang="scss" scoped>
    textarea {
        border: 1px solid #ccc;
        border-radius: 16px;
        width: 90%;
        min-height: 100px;
        padding: 16px;
        font-size: 16px;
        color: lighten(#000000, 0.6);
    }
    textarea:focus {
        outline: none;
    }
</style>
