<template>
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
</template>
<script lang="ts">
    import Button1Demo from './Button1.demo.vue'
    import Button2Demo from './Button2.demo.vue'
    import Button3Demo from './Button3.demo.vue'
    import Button4Demo from './Button4.demo.vue'
    import Demo from './Demo.vue';
    export default {
        components: { Demo },
        setup() {
            return {
                Button1Demo, Button2Demo, Button3Demo, Button4Demo
            }
        }
    }
</script>
<style lang="scss" scoped>
    p {
        margin: 16px 0;
    }
</style>
