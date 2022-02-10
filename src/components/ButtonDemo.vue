<template>
    <p>示例一：theme属性的使用</p>
    <Button>按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>

</template>
<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        components: { Button },
        setup() {}
    }
</script>
<style lang="scss" scoped>
    p {
        margin-bottom: 16px;
    }
</style>
