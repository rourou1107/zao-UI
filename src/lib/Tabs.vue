<template>
    <div v-for="(t, index) in titles" :key="index">{{t}}</div>
    <component v-for="(c, index) in defaults" :is="c" :key="index" />
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
            const titles = defaults.map(item => item.props.title)
            return { defaults, titles }
        }
    }
</script>
