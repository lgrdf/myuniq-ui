<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
</script>

<template>
  <h class="text-3xl font-bold underline">{{ msg }}</h>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
