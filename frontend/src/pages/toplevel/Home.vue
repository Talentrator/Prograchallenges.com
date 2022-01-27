<template>
  <div class="home">
    <div class="mb-5 text-center text-light">
      <div class="display-1">🖥️</div>
      <h1 class="pb-2 mt-4">Practice coding</h1>
      <h3>And get from 0️⃣ to 🦸‍♀️!</h3>
    </div>

    <!-- Challenges component for homepage -->
    <b-container class="py-3">
      <h1 class="py-4">
        Recent Challenges
        <span class="float-end">
          <b-link
            class="btn btn-primary px-1 px-lg-2 py-1 text-capitalize"
            style="border: none"
            :to="{ name: 'clg-create' }"
          >
            Create a Challenge
          </b-link>
        </span>
      </h1>
    </b-container>
    <div class="text-center" v-if="!loaded">
      <b-spinner variant="primary" />
    </div>
    <div class="container w-100" v-else>
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

      <!-- quick questions -->

    <quick-questions />

    <OtherSections />
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import ChallengeCard from "../../components/ChallengeCard.vue";
import OtherSections from "./home/OtherSections.vue";
import QuickQuestions from "./home/QuickQuestions.vue";

export default {
  name: "Home",
  components: {
    ChallengeCard,
    OtherSections,
    QuickQuestions,
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
