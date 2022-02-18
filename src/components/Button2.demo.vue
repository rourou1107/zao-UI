<demo>支持 size 属性</demo>
<template>
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
        components: { Button  }
    }
</script>
