<template>
    <Tabs>
        <Tab title="标题1">Tab1</Tab>
        <Tab title="标题2">Tab2</Tab>
    </Tabs>
</template>
<script lang="ts">
    import Tabs from '../lib/Tabs.vue'
    import Tab from '../lib/Tab.vue'
    export default {
        components: { Tabs, Tab }
    }
</script>
