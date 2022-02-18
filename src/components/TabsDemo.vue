<template>
    <Demo :component="Tab1Demo"/>
</template>
<script lang="ts">
    import Tab1Demo from './Tabs1.demo.vue'
    import Demo from './Demo.vue';
    export default {
        components: { Demo },
        setup() {
            return { Tab1Demo }
        }
    }
</script>
