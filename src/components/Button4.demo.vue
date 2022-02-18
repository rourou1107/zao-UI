<demo>支持 disabled 属性</demo>
<template>
    <Button disabled>按钮</Button>
    <Button theme="link" disabled>链接按钮</Button>
    <Button theme="text" disabled>文字按钮</Button>
    <p>示例五：loading属性的使用</p>
    <Button loading>加载中</Button>
</template>
<script lang="ts">
    import Button from '../lib/Button.vue'
    export default {
        components: { Button  }
    }
</script>
