<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div v-for="(t, index) in titles" :key="index" class="gulu-tabs-nav-item">{{t}}</div>
        </div>
        <div class="gulu-tabs-content">
            <component v-for="(c, index) in defaults" :is="c" :key="index" class="gulu-tabs-content-item" />
        </div>
    </div>
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
<style lang="scss">
    $blue: #40a9ff;
    $color: #333;
    $border-color: #d9d9d9;
    .gulu-tabs {
        &-nav {
            display: flex;
            color: $color;
            border-bottom: 1px solid $border-color;
            &-item {
                padding: 8px 0;
                margin: 0 16px;
                cursor: pointer;
                &:first-child {
                    margin-left: 0;
                }
                &.selected {
                    color: $blue;
                }
            }
        }
        &-content {
            padding: 8px 0;
        }
    }
</style>
