<script setup>

const animals = ref()

onMounted(async () => {
  const { result } = await $fetch("/api/animals/query")
  animals.value = result
})

</script>

<template>
  <div class="animal-list">
    <div class="animal" v-for="(animal, idx) in animals" :key="idx">
      <p>Name: {{animal.name}}</p>
      <p>Age: {{animal.age}}</p>
      <p>Description: {{animal.description}}</p>
    </div>    
  </div>
</template>

<style lang="less" scoped>
.animal-list {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  max-width: 80%;
  margin: 0 auto;

  .animal {
    text-align: center;
  }
}
</style>