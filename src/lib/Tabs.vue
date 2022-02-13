<template>
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
</template>
<script lang="ts">
    import Tab from './Tab.vue'
    export default  {
        setup(props, context) {
            const defaults = context.slots.default()
            const index = defaults.findIndex(item => item.type !== Tab)
            if (index > -1) {
                throw Error('Tabs 子组件 必须为 Tab')
            }
            return { defaults }
        }
    }
</script>
