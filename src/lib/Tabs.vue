<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav">
            <div v-for="(t, index) in titles" :key="index" class="gulu-tabs-nav-item" @click="select(t)"
                 :class="{selected: t === selected}">{{t}}</div>
        </div>
        <div class="gulu-tabs-content">
            <component :is="current"  class="gulu-tabs-content-item" :key="current.props.title" />
        </div>
    </div>
</template>
<script lang="ts">
    import Tab from './Tab.vue'
    import { computed } from 'vue'
    export default  {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const defaults = context.slots.default()
            const index = defaults.findIndex(item => item.type !== Tab)
            if (index > -1) {
                throw Error('Tabs 子组件 必须为 Tab')
            }
            const titles = defaults.map(item => item.props.title)
            const current = computed(() => {
                return defaults.find(item => item.props.title === props.selected)
            })
            const select = (title: string) => {
                context.emit('update:selected', title)
            }
            return { defaults, titles, select, current }
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
