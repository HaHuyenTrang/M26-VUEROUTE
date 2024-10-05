<template>
  <div>
    <h1>Product detail pagev ===> {{ id }}</h1>
  </div>
</template>

<script  setup>
import { useRoute } from 'vue-router';

 const route = useRoute();
 const id = route.params.id
</script>

<style>

</style>