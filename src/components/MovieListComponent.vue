<template>
    <div v-if="movies.length != 0" class="grid gap-4 p-4 max-w-5xl grid-cols-1 sms:grid-cols-2 lg:grid-cols-3">
        <section 
            v-for="movie in movies"
            :key="movie"
            >
            <MovieCard :movie="movie"/>
        </section>
    </div>
    <div v-else class="text-center">
        <h2 class="font-bold text-lg text-gray-300">No Movies Found</h2>
    </div>
</template>

<script>
import MovieCard from './MovieCard.vue';
export default {
    name: "MovieListComponent",
    components: {
        MovieCard
    },
    props: ['movies'],
}
</script>

<style scoped>

</style>