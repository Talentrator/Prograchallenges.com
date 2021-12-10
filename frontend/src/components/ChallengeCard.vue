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
    @click="redirectToSingleChallenge(challenge.id)"
  >
    <b-row class="pt-1">
      <b-col>
        <h5 class="challenge-title" :title="challengeDescription">{{ challenge.title }}</h5>
      </b-col>
      <b-col cols="3">
        <p class="m-0">by {{ challenge.nickname }}</p>
      </b-col>
      <b-col cols="2">
        <p class="m-0">{{ challenge.programmingLanguage }}</p>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
export default {
  name: "Challenges",
  props: {
    challenge: {
      type: Object,
    },
  },
  computed: {
    challengeTitle() {
      return this.challenge.title.length > 20
        ? this.challenge.title.slice(0, 20) + `...`
        : this.challenge.title;
    },
    challengeDescription() {
      return this.challenge.text.length > 200
        ? this.challenge.text.slice(0, 200) + "..."
        : this.challenge.text;
    },
    challengeLink() {
      return { name: "clg-single", params: { id: this.challenge.id } };
    },
  },
  methods: {
    redirectToSingleChallenge() {
      this.$router.push(this.challengeLink);
    },
  },
};
</script>

<style lang="scss" scoped>
.challenge {
  &:hover {
    box-shadow: 0 3px 6px 0 rgb(255 255 255 / 10%);
    .challenge-title {
      color: map-get($map: $theme-colors, $key: primary);
    }
  }
  .challenge-title {
    transition: all 0.1s linear;
    overflow-wrap: break-word;
    word-break: break-word;
  }
}
</style>
