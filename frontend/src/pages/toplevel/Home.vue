<template>
  <div class="home">
    <Banner />
    <Challenges />
  </div>
</template>

<script>
import Banner from "./home/Banner.vue";
import Challenges from './home/Challenges.vue';

export default {
  name: "Home",
  components: {
    Banner,
    Challenges,
  },
};
</script>
