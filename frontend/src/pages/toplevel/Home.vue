<template>
  <div class="home">
    <Banner />
    <Challenges :pagination="pagination" :challenges="challenges" />
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
  data() {
    return {
      challenges: [
        { ID:1 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:2 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:3 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:4 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:5 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
      ],
      pagination:false
    }
  },
};
</script>
