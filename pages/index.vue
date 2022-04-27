<script setup lang="ts">

const animals = ref()

onMounted(async () => {
  const { result } = await $fetch("/api/query?col=animals")
  animals.value = result
})

</script>

<template>
  <div>
    {{ animals }}
  </div>
  
</template>

<style lang="less" scoped>

</style>