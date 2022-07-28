<template>
    <div class="w-full h-auto py-3">
        <form class="flex w-full" @submit="searchMovie">
            <input type="search" class="p-2 border rounded-lg w-5/6" v-model="name">
            <input type="submit" value="Search" class="w-1/6 rounded-md bg-blue-500  text-blue-200 ml-1 hover:cursor-pointer hover:bg-blue-700">
        </form>
    </div>
</template>

<script>
import { ref, } from 'vue';
export default {
    name: "MovieComponent",
    setup(props,context) {
        const name = ref('');
        const searchMovie = (e) => {
            e.preventDefault();
            context.emit('find-movie', name.value)
        }
        return {name,searchMovie}
    },
}
</script>

<style scoped>

</style>