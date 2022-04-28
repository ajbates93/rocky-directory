<script setup lang="ts">

</script>

<template>
  <header id="header">
    <NuxtLink id="imageLink" to="/">
      <picture id="image">
        <img src="/textImage.webp" />
      </picture>
    </NuxtLink>
    <NuxtLink class="link" to="/about">
      About
    </NuxtLink>
    <NuxtLink class="link" to="/contact">
      Contact
    </NuxtLink>
    <NuxtLink class="link" to="/animals/AddAnimal">
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
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem 0 0.5rem;

  #imageLink {
    margin-right: auto;
  }

  #image  { 
    img {
      margin-top: 10px;
      max-width: 300px;
      width: 100%;

    }
  }

  .link {
    margin-left: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
  }
}
</style>