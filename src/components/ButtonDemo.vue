<template>
    <Button @click="onClick" @mouseover="onClick" size="small">按钮</Button>
</template>
<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        components: { Button },
        setup() {
            const onClick = () => {
                console.log('hi')
            }
            return { onClick }
        }
    }
</script>
