<template>
  <div class="home">
    <Banner />
    <div class="text-center text-light">
      <h1 class="letter-spacing pb-2 display-4 mt-4">Challenges</h1>
      <p>
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
    </div>

    <!-- Challenges component for homepage -->
    <div class="text-center" v-if="!loaded">
      <b-spinner variant="primary" />
    </div>
    <div v-else>
      <div
        v-for="item in challenges"
        :key="item.id"
        class="my-3 mx-auto max-width"
      >
        <HomeChallenge :item="item" />
      </div>
    </div>

    <div class="text-center">
      <b-link
        class="btn btn-primary mt-3"
        style="border: none"
        :to="{ name: 'challenges' }"
      >
        View More Challenges
      </b-link>
    </div>
    <OtherSections />
  </div>
</template>

<script>
import firebase from "firebase";
import Banner from "./home/Banner.vue";
import HomeChallenge from "../../components/HomeChallenge.vue";
import OtherSections from "./home/OtherSections.vue";

export default {
  name: "Home",
  components: {
    Banner,
    HomeChallenge,
    OtherSections,
  },
  data() {
    return {
      challenges: [],
      pagination: false,
      loaded: false,
    };
  },

  methods: {
    async fetchData() {
      const getAllChallenges = firebase
        .functions()
        .httpsCallable("getAllChallenges");
      const result = await getAllChallenges();
      this.challenges = result.data.slice(0, 3);
      this.loaded = true;
    },
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style>
.letter-spacing {
  letter-spacing: 5px !important;
}
</style>
