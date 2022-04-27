<script setup lang="ts">
  interface Animal {
    name: String,
    age: String,
    size: Number,
    type: Number,
    description: String
  }

  const name = ref('')
  const age = ref('')
  const size = ref(0)
  const type = ref(0)
  const description = ref('')

  const handleSubmit = async () => {
    const form: Animal = {
      name: name.value,
      age: age.value,
      size: size.value,
      type: type.value,
      description: description.value
    }
    try {
      const result = await fetch('/api/animals/add', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      return result
    } catch (error) {
      console.log(error.message)
    }
  }
  
</script>

<template>
  <div>
    <form class="form" @submit.prevent="handleSubmit">
      <input placeholder="name" type="text" v-model="name" />
      <input placeholder="age" type="text" v-model="age" />
      <input placeholder="size" type="text" v-model="size" />
      <input placeholder="type" type="text" v-model="type" />
      <input placeholder="description" type="text" v-model="description" />
      <button>Search For TV Shows</button>
    </form>
  </div>
</template>