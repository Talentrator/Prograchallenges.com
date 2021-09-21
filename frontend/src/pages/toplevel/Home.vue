<template>
  <div class="home">
    <Banner />
    <Challenges />
    <OtherSections />
  </div>
</template>

<script>
import Banner from "./home/Banner.vue";
import Challenges from './home/Challenges.vue';
import OtherSections from './home/OtherSections.vue';


export default {
  name: "Home",
  components: {
    Banner,
    Challenges,
    OtherSections,
  },
};
</script>
