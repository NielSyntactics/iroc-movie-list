<template> 
  <div class="flex justify-center items-center md:min-h-screen md:p-5">
    <MovieComponentVue/>
  </div>
</template>

<script>
import MovieComponentVue from './components/MovieComponent.vue'
export default {
  name: 'App',
  components: {
    MovieComponentVue
  }
}
</script>

<style>
</style>
