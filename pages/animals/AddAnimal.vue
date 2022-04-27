<script setup lang="ts">
  interface Animal {
    name: String,
    age: String,
    size: Number,
    type: Number,
    description: String
  }

  const petName = ref('')
  const age = ref('')
  const size = ref(0)
  const type = ref(0)
  const description = ref('')

  const handleSubmit = async () => {
    const form: Animal = {
      name: petName.value,
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
      <div class="row">
        <input placeholder="name" type="text" v-model="petName" />
      </div>
      <div class="row">
        <input placeholder="description" type="text" v-model="description" />
      </div>
      <div class="row">
        <input placeholder="age" type="text" v-model="age" />
      </div>
      <div class="row">
        <input placeholder="size" type="text" v-model="size" />
      </div>
      <div class="row">
        <input placeholder="type" type="text" v-model="type" />
      </div>
      <button>Create</button>
    </form>
  </div>
</template>

<style lang="less" scoped>
.form {
  max-width: 400px;
  border: 1px solid #eaeaea;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 0.5rem;
}
.row {
  margin: 0.5rem 0;

  input[type=text] {
    border: 1px solid #dadada;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }
  button {
  }
}
</style>