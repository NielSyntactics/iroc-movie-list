import { ref, } from 'vue';


const movie = () => {
    let movies =  ref([]);

    const fetchMovie = async (searchTerm) => {
        try {
            const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.VUE_APP_API_KEY}`);
            const data = await res.json();
            if(data.Response == "True") {
                movies.value = data.Search;
            }else {
                movies.value = [];
            }
        }catch(error) {
            alert(error.message)
        }

    };
    return {movies, fetchMovie};
}

export default movie;