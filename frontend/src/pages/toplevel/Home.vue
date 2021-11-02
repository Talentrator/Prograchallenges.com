<template>
  <div class="home">
    <div class="mb-5 text-center text-light">
      <div class="display-1"> 🖥️</div>
      <h1 class="pb-2 mt-4">Practice coding</h1>
      <h3>And get from 0️⃣ to 🦸‍♀️!</h3>
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
        <Challenge :item="item" />
      </div>
    </div>

    <div class="text-center">
      <b-button variant="primary" class="mt-2" :to="{ name: 'challenges' }">
        See all
      </b-button>
    </div>
    <OtherSections />
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/functions';
import Banner from "./home/Banner.vue";
import Challenge from "../../components/Challenge.vue";
import OtherSections from "./home/OtherSections.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Challenge,
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
