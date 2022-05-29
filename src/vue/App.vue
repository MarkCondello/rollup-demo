<template>
  <h1>Hello {{ name }}</h1>
  <input type="text" v-model="name" />
</template>

<script>
export default {
  data() {
    return { name: 'Jane Dole' }
  }
}
</script>

<style scoped>
/* Any styles added here throw errors */
</style>

 
