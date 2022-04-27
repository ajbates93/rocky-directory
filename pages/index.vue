<script setup>

const animals = ref()

onMounted(async () => {
  const { result } = await $fetch("/api/animals/query")
  animals.value = result
})

</script>

<template>
  <div>
    <div v-for="(animal, idx) in animals">
      <p>Name: {{animal.name}}</p>
      <p>Age: {{animal.age}}</p>
      <p>Description: {{animal.description}}</p>
    </div>    
  </div>
</template>

<style lang="less" scoped>

</style>