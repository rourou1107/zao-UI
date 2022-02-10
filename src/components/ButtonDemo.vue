<template>
    <p>示例一：theme属性的使用</p>
    <Button>按钮</Button>
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
    <p>示例三：level属性的使用</p>
    <Button level="main">主要</Button>
    <Button>普通</Button>
    <Button level="danger">危险</Button><br/><br/>
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="danger">危险链接</Button><br/><br/>
    <Button theme="text" level="main">主要文字</Button>
    <Button theme="text">普通文字</Button>
    <Button theme="text" level="danger">危险文字</Button>
    <p>示例四：disabled属性的使用</p>
    <Button disabled>按钮</Button>
    <Button theme="link" disabled>链接按钮</Button>
    <Button theme="text" disabled>文字按钮</Button>
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
