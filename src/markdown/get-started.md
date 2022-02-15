# 开始使用
[安装](#/doc/install)组件库。

写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "vue-ui"
```

就可以使用该组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Switch, Dialog} from "vueui"
export default {
  components: {Button}
}
</script>
```
