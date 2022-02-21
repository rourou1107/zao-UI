<template>
    <div class="topnavAndBanner">
        <Topnav />
        <div class="banner">
            <h1>Vue3 UI 框架</h1>
            <h2>一个便捷的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com">GitHub</a>
                <router-link to="/doc">开始</router-link>
            </p>
        </div>
    </div>
    <div class="features">
        <ul>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-vue"></use>
                </svg>
                <h3>基于 Vue3</h3>
                <p>边学习 Vue3 边写</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-ts"></use>
                </svg>
                <h3>基于 TypeScript</h3>
                <p>源代码采用 TypeScript 编写</p>
            </li>
            <li>
                <svg class="icon">
                    <use xlink:href="#icon-light"></use>
                </svg>
                <h3>代码易读</h3>
                <p>每个组件源代码都简洁易读</p>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue'
    export default {
        components: { Topnav }
    }
</script>
<style lang="scss" scoped>
    $green: #02bcb0;
    $border-radius: 4px;
    $color: #007974;
    .topnavAndBanner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
        .banner {
            padding: 100px 0;
            color: $color;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            > .actions{
                padding: 8px 0;
                a {
                    margin:0 8px;
                    background: $green;
                    color: #ffffff;
                    display: inline-block;
                    border-radius: $border-radius;
                    padding: 8px 24px;
                }
            }
        }
    }
    .features {
        margin: 64px auto;
        @media (min-width: 800px) {
            width: 800px;
        }
        @media (min-width: 1200px) {
            width: 1200px;
        }
        > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            > li {
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas:
                        "icon title"
                        "icon text";
                grid-template-columns: 80px auto;
                grid-auto-rows: 1fr auto;
                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }
                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }
                > p {
                    grid-area: text;
                }
            }
            @media (max-width:800px) {
                & {
                    justify-content: flex-start;
                    margin-left: 32px;
                }
            }
        }
    }
</style>
