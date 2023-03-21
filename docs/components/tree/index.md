# 🌲 树

:::demo this is a tree

```vue
<template>
  <STree :innerData="sdata"></STree>
</template>
<script setup>
import { ref } from 'vue'
  const sdata = ref([

  {

  label:'docs',

  id:'node-1',

  level:1

  },

  {

  label:'docs1',

  id:'node-1-1',

  parentId: 'node-1',

  level: 2

  },

  {

  label:'docs2',

  id:'node-1-2',

  parentId: 'node-1',

  level: 2

  }

  ])
  console.log(sdata)
</script>
```

:::
