<template>
    <div class="mx-auto p-3 md:container w-full lg:w-3/5 sms:w-5/6 md:w-4/5 md:border md:rounded-lg bg-gray-900">
        <SearchComponentVue @find-movie="fetchMovie" />
        <MovieListComponent :movies="movies" />
    </div>
</template>

<script>
import SearchComponentVue from './SearchComponent.vue'
import MovieListComponent from './MovieListComponent.vue'
import movie from '../composable/movie'

export default {
    name: "MovieComponent",
    components: {
        SearchComponentVue,
        MovieListComponent
    },
    setup() {
        const { movies, fetchMovie } = movie();
      
        return {
            movies,
            fetchMovie,
        }
    },
}
</script>

<style scoped>

</style>