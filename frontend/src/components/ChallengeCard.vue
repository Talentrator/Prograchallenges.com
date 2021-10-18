<template>
  <b-col
    class="
      mx-1 mx-md-5
      p-1 p-md-2
      text-white
      border border-primary
      pc-cursor-pointer
    "
    cols="12"
    @click="redirectToSingleChallenge(challenge.id)"
  >
    <b-row class="pt-1">
      <b-col>
        <h5>{{ challenge.title }}</h5>
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
  methods: {
    redirectToSingleChallenge(id) {
      this.$router.push({ name: "clg-single", params: { id } });
    },
  },
  mounted() {
    if (this.item.title.length > 23) {
      this.item.title = this.item.title.slice(0, 20) + "...  ";
    }
  },
};
</script>
