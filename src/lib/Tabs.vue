<template>
    <div class="gulu-tabs">
        <div class="gulu-tabs-nav" ref="nav">
            <div v-for="(t, index) in titles" :key="index" class="gulu-tabs-nav-item" @click="select(t)"
                 :class="{selected: t === selected}" :ref="(el) => {if(t === selected) { selectedItem = el}}">{{t}}</div>
            <div class="gulu-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="gulu-tabs-content">
            <component :is="current"  class="gulu-tabs-content-item" :key="current.props.title" />
        </div>
    </div>
</template>
<script lang="ts">
    import Tab from './Tab.vue'
    import { computed, ref, watchEffect } from 'vue'
    export default  {
        props: {
            selected: {
                type: String
            }
        },
        setup(props, context) {
            const selectedItem = ref<HTMLDivElement>(null)
            const indicator = ref<HTMLDivElement>(null)
            const nav = ref<HTMLDivElement>(null)
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
            watchEffect(() => {
                if (selectedItem.value && indicator.value) {
                    const { width, left: leftSelectedItem } = selectedItem.value.getBoundingClientRect()
                    const { left: leftNav} = nav.value.getBoundingClientRect()
                    indicator.value.style.width = width + 'px'
                    indicator.value.style.left = leftSelectedItem - leftNav + 'px'
                }
            })
            return { defaults, titles, select, current, selectedItem, indicator, nav }
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
            position: relative;
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
            &-indicator {
                position: absolute;
                width: 20px;
                height: 3px;
                background: $blue;
                left: 0;
                bottom: -1px;
            }
        }
        &-content {
            padding: 8px 0;
        }
    }
</style>
