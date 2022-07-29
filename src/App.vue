<template> 
  <div class="flex justify-center items-center md:min-h-screen md:p-5">
    <div id="progress" class="grid place-items-center cursor-pointer bg-greenBackground fixed bottom-10 right-10 h-16 w-16 rounded-full">
      <span id="progress-value" class="text-center block bg-white rounded-full gird place-items-center text-4xl text-gray-600 h-4/5 w-4/5">
        &#x1F815;
      </span>
    </div>
    <MovieComponentVue/>
  </div>
</template>

<script>
import MovieComponentVue from './components/MovieComponent.vue'
export default {
  name: 'App',
  components: {
    MovieComponentVue
  },
  setup(){
    const calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      // let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);

      if(pos > 100) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }

      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });

      scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  }
}
</script>
<style>
* {
  scroll-behavior: smooth;
}
/* #progress {
  background-color: #03cc85;
  position: fixed;
  bottom: 20px;
  right: 10px;
  height: 70px;
  width: 70px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  cursor: pointer;
} */

/* #progress-value {
  display: block;
  height: calc(100% - 15px);
  width: calc(100% - 15px); 
  background-color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 35px;
  color: #001a2e;
} */

</style>
