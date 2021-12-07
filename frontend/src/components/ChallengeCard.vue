<template>
  <b-col
    class="
      p-1 p-md-2
      px-lg-3
      text-white
      border border-primary
      pc-cursor-pointer
      challenge
      rounded
      mb-3
    "
    cols="12"
    @click="redirectToSingleChallenge(challenge.id)"
  >
    <b-row class="pt-1">
      <b-col>
        <h5 class="challenge-title">{{ challenge.title }}</h5>
        <p class="text-muted">26 min ago</p>
        <p class="challenge-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate... <a href="#" class="more text-primary">More</a>
        </p>
        <div class="author-language pt-3 row">
          <div class="col-6">
            <small class="text-muted">by {{ challenge.nickname }}</small>
          </div>
          <div class="col-6 text-end">
            <small class="text-muted">{{ challenge.programmingLanguage }}</small>
          </div>
        </div>
      </b-col>
      <!-- <b-col cols="3">
        <p class="m-0">by {{ challenge.nickname }}</p>
      </b-col>
      <b-col cols="2">
        <p class="m-0">{{ challenge.programmingLanguage }}</p>
      </b-col> -->
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
    if (this.challenge.title.length > 23) {
      this.challenge.title = this.challenge.title.slice(0, 20) + "...  ";
    }
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
    transition: all 0.2s linear;
    overflow-wrap: break-word;
    word-break: break-word;
  }
}
</style>
