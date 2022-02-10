<template>
    <p>示例一：theme属性的使用</p>
    <Button>按钮</Button>
    <Button theme="button">按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
    <p>示例二：size属性的使用</p>
    <Button size="big">大</Button>
    <Button>中</Button>
    <Button size="small">小</Button><br/>
    <Button theme="link" size="big">大</Button>
    <Button theme="link">中</Button>
    <Button theme="link" size="small">小</Button><br/>
    <Button theme="text" size="big">大</Button>
    <Button theme="text">中</Button>
    <Button theme="text" size="small">小</Button>
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
        margin: 16px 0;
    }
</style>
