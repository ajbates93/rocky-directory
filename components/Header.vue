<script setup lang="ts">

</script>

<template>
  <header id="header">
    <NuxtLink to="/">
      <picture id="image">
        <img src="/public/textImage.webp" />
      </picture>
    </NuxtLink>
    <NuxtLink to="/animals/AddAnimal">
      Add New
    </NuxtLink>
  </header>
</template>

<style lang="less" scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #efefef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 0.5rem;

  #image  { 
    img {
      margin-top: 10px;
      max-width: 300px;
      width: 100%;

    }
  }

  #link {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>