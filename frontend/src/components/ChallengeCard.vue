<template>
  <b-col
    class="
      p-1 p-md-2
      text-white
      border border-primary
      challenge
      pc-cursor-pointer
    "
    cols="12"
  >
    <b-row class="pt-1 align-items-center">
      <b-col cols="12" md="7" class="mb-2 mb-sm-0">
        <div class="text-secondary mb-1" v-if="challenge.difficulty">
          <small class="">{{ challenge.difficulty }}</small>
        </div>
        <div class="d-sm-flex align-items-center mb-1 mb-sm-0">
          <router-link :to="challengeLink" class="text-white challenge-title">
            <h5 class="mb-0">{{ challenge.title }}</h5>
          </router-link>
          <voting
            @voted="vote"
            :upvotes="votes"
            :voting="voting"
            class="d-none d-sm-block ms-3"
          />
        </div>
      </b-col>
      <b-col cols="6" md="3" class="text-md-end">
        <p class="m-0">by {{ challenge.nickname }}</p>
      </b-col>
      <b-col cols="6" md="2" class="text-end">
        <p class="m-0">
          {{
            getProgrammingLanguage(challenge.programmingLanguage) ||
            challenge.programmingLanguage
          }}
        </p>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import Voting from "./Voting.vue";
import ProgrammingLanguagesMixin from "@/mixins/ProgrammingLanguagesMixin.js";
import firebase from "firebase/app";

export default {
  components: { Voting },
  name: "Challenges",
  mixins: [ProgrammingLanguagesMixin],
  props: {
    challenge: {
      type: Object,
    },
  },
  data() {
    return {
      votes: this.challenge.votes,
      voting: false,
    }
  },
  computed: {
    challengeTitle() {
      return this.challenge.title.length > 20
        ? this.challenge.title.slice(0, 20) + `...`
        : this.challenge.title;
    },
    challengeLink() {
      return { name: "clg-single", params: { id: this.challenge.id } };
    },
  },
  methods: {
    redirectToSingleChallenge() {
      this.$router.push(this.challengeLink);
    },
    async vote(votes) {
      this.voting = true;
      const challengeVote = firebase.functions().httpsCallable("challengeVote");
      await challengeVote({
        challengeId: this.challenge.id,
        votes,
      });
      
      const challenge = await this.getSingleChallenge();
      this.votes = challenge.data.votes;
      this.voting = false;
    },
    async getSingleChallenge() {
      const fetchSingleChallenge = firebase
        .functions()
        .httpsCallable("getSingleChallenge");
      return await fetchSingleChallenge({ id: this.challenge.id });
    },
  },
};
</script>

<style lang="scss" scoped>
.challenge {
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(255 255 255 / 10%);
  }
  .challenge-title {
    transition: all 0.1s linear;
    overflow-wrap: break-word;
    word-break: break-word;
    &:hover {
      text-decoration: none !important;
      color: map-get($map: $theme-colors, $key: primary) !important;
    }
  }
}
</style>
