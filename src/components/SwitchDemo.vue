<template>
    <h1>Switch 组件实例</h1>
    <div class="demo">
        <h2>{{Switch1Demo.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <Component :is="Switch1Demo" />
        </div>
        <div class="demo-actions">
            <Button>查看代码</Button>
        </div>
        <div class="demo-code">
            <pre v-html="Prism.highlight(Switch1Demo.__sourceCode, Prism.languages.html, 'html')" class="language-html" />
        </div>
    </div>
    <div class="demo">
        <h2>{{Switch2Demo.__sourceCodeTitle}}</h2>
        <div class="demo-component">
            <Component :is="Switch2Demo" />
        </div>
        <div class="demo-actions">
            <Button>查看代码</Button>
        </div>
        <div class="demo-code">
            <pre v-html="Prism.highlight(Switch2Demo.__sourceCode, Prism.languages.html, 'html')" class="language-html" />
        </div>
    </div>
</template>
<script lang="ts">
    import 'prismjs'
    import 'prismjs/themes/prism.css'
    import Switch1Demo from '../components/Switch1.demo.vue'
    import Switch2Demo from '../components/Switch2.demo.vue'
    import { ref } from 'vue'
    import Button from '../lib/Button.vue';
    export default {
        components: {Button },
        setup() {
            const bool = ref(false)
            const Prism = (window as any).Prism
            return { bool, Switch1Demo, Switch2Demo, Prism }
        }
    }
</script>
<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .demo {
        border: 1px solid $border-color;
        margin: 16px 0 32px;

    > h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
         padding: 16px;
     }

    &-actions {
         padding: 8px 16px;
         border-top: 1px dashed $border-color;
     }

    &-code {
         padding: 8px 16px;
         border-top: 1px dashed $border-color;

    > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
    }
    }
    }

</style>
