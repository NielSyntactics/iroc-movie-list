<template>
    <div class="h-auto flex flex-col rounded-lg bg-gray-800 sms:h-96 overflow-hidden">
        <div class="h-5/6 w-full">
            <img :src="movie.Poster == 'N/A'  ? fetchPic() : movie.Poster " alt="" class="rounded-t-lg h-full w-full fill-slate-500">
        </div>
        <div class="bg-gray-500 px-3 py-2 rounded-b-lg w-full h-1/6 overflow-y-auto scrollbar flex justify-center items-center">
            <h2 class="font-extrabold  text-white text-center">{{movie.Title}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:"CardMovie",
    props:['movie'],
    setup(){
        const fetchPic =  () => {
            return require('../assets/img/anon.png')
        }
        return {
            fetchPic
        }
    }
}
</script>
<style scoped>

</style>