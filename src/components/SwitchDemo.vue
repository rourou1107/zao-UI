<template>
    <h1>Switch 组件实例</h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
</template>
<script lang="ts">
    import Switch1Demo from '../components/Switch1.demo.vue'
    import Switch2Demo from '../components/Switch2.demo.vue'
    import { ref } from 'vue'
    import Button from '../lib/Button.vue';
    import Demo from './Demo.vue';
    export default {
        components: {Demo, Button },
        setup() {
            const bool = ref(false)
            return { bool, Switch1Demo, Switch2Demo }
        }
    }
</script>
