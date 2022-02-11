<template>
    <Button @click="toggle">切换dialog</Button>
    <Dialog v-model:visible="visible" />
</template>
<script lang="ts">
    import Dialog from '../lib/Dialog.vue';
    import Button from '../lib/Button.vue';
    import { ref } from 'vue'
    export default {
        components: {Button, Dialog },
        setup() {
            const visible = ref(false)
            const toggle = () => {
                visible.value = !visible.value
            }
            return { toggle, visible }
        }
    }
</script>
