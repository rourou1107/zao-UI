<demo>支持 level 属性</demo>
<template>
    <Button level="main">主要</Button>
    <Button>普通</Button>
    <Button level="danger">危险</Button><br/><br/>
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="danger">危险链接</Button><br/><br/>
    <Button theme="text" level="main">主要文字</Button>
    <Button theme="text">普通文字</Button>
    <Button theme="text" level="danger">危险文字</Button>
</template>
<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        components: { Button  }
    }
</script>
