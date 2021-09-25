<template>
  <div class="home">
    <Banner />
    <div class="text-center text-light">
      <h1 class="letter-spacing pb-2 display-4 mt-4">Challenges</h1>
      <p>
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
    </div>
    <Challenges :pagination="pagination" :challenges="challenges" />
    <div class="text-center">
      <b-link class="btn btn-primary mt-3" style="border: none" :to="{name:'challenges'}">
        View More Challenges
      </b-link>
    </div>
    <OtherSections />
  </div>
</template>

<script>
import firebase from 'firebase'
import Banner from "./home/Banner.vue";
import Challenges from "../../components/ChallengesTable.vue";
import OtherSections from "./home/OtherSections.vue";

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
        {
          ID: 1,
          Problem: "Example"
        },
        {
          ID: 2,
          Problem: "Example"
        },
        {
          ID: 3,
          Problem: "Example"
        },
        {
          ID: 4,
          Problem: "Example"
        },
        {
          ID: 5,
          Problem: "Example"
        },
      ],
      pagination: false,
    };
  },

  methods: {
    fetchData: async () => {
      const getAllChallenges = firebase.functions().httpsCallable('getAllChallenges');
      const result = await getAllChallenges();
      console.log(result);
    }
  },

  async created() {
    await this.fetchData();
  }
};
</script>


<style>
.letter-spacing{
  letter-spacing: 5px !important;
}
</style>