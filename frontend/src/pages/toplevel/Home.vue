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
    <div class="container w-100" v-else>
      <div class="row mb-1">
        <div class="col-sm-6">
          <h4 class="text-capitalize">Recent Challenges</h4>
        </div>
        <div class="col-sm-6 text-end">
          <b-link
          class="btn btn-primary"
          style="border: none"
          :to="{ name: 'clg-create' }"
        >
          Create a Challenge
        </b-link>
        </div>
      </div>
      
      <div
        v-for="challenge in challenges"
        :key="challenge.id"
        class="my-2 mx-auto"
      >
        <ChallengeCard :challenge="challenge" />
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
import ChallengeCard from "../../components/ChallengeCard.vue";
import OtherSections from "./home/OtherSections.vue";

export default {
  name: "Home",
  components: {
    ChallengeCard,
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
