<template>
  <div class="votes fs-6">
    <button
      :class="['btn btn-sm ms-2 upvote', { active: userUpvoted }]" :disabled="voting"
      @click="upvote"
    >
      <b-icon-chevron-up class="fs-6" />
    </button>
    <small class="">{{ upvotes }}</small>
    <button
      :class="['btn btn-sm ms-2 text-white downvote', { active: userDownoted }]" :disabled="voting"
      @click="downvote"
    >
      <b-icon-chevron-down class="fs-6" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Voting",
  emits: ["upvoted", "downvoted"],
  props: {
    upvotes: {
      type: Number,
      default: 0,
    },
    voting: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      localUpvotes: this.upvotes,
      userUpvoted: false,
      userDownoted: false,
    };
  },
  watch: {
    upvotes(newValue) {
      this.localUpvotes = newValue;
    },
  },
  methods: {
    upvote() {
      if (!this.userUpvoted) {
        this.vote("upvote", this.userDownoted ? 2 : 1);
      }
    },
    downvote() {
      if (!this.userDownoted) {
        this.vote("downvote", this.userUpvoted ? 2 : 1);
      }
    },
    vote(method, value = 1) {
      switch (method) {
        case "upvote":
          this.localUpvotes += +value;
          this.userUpvoted = true;
          this.userDownoted = false;
          this.$emit("upvoted", value);
          break;

        case "downvote":
          this.localUpvotes -= +value;
          this.userUpvoted = false;
          this.userDownoted = true;
          this.$emit("downvoted", value);
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.votes {
  button.btn {
    padding-left: calc($spacer / 2) !important;
    padding-right: calc($spacer / 2) !important;
    color: darken($color: $white, $amount: 30) !important;
    &:not(.active) {
      &:hover {
        color: $white !important;
      }
    }
    &.active {
      color: map-get($map: $theme-colors, $key: "secondary") !important;
    }
  }
}
</style>