<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <Test>
    <template #default>aaa</template>
    <template #title>titleaaaa</template>
  </Test>
  <SButton type="primary" size="large" block>确定</SButton>
  <SButton size="small" disabled>取消</SButton>
  <SButton type="text">嘿嘿</SButton>
</template>

<style scoped></style>
