<template>
  <div class="votes fs-6">
    <button
      :class="[
        'btn btn-sm ms-2 me-1 upvote px-1 text-white-50',
        { active: userUpvoted },
      ]"
      :disabled="voting"
      @click="updateVotes('upvote')"
    >
      <b-icon-chevron-up class="fs-6" />
    </button>
    <small class="">{{ upvotes }}</small>
    <button
      :class="[
        'btn btn-sm ms-1 downvote px-1 text-white-50',
        { active: userDownoted },
      ]"
      :disabled="voting"
      @click="updateVotes('downvote')"
    >
      <b-icon-chevron-down class="fs-6" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Voting",
  emits: ["voted"],
  props: {
    upvotes: {
      type: Number,
      default: 0,
    },
    voting: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      userUpvoted: false,
      userDownoted: false,
    };
  },
  methods: {
    updateVotes(method) {
      // if user had already voted return
      if (
        (method == "upvote" && this.userUpvoted) ||
        (method == "donvote" && this.userDownoted)
      )
        return;

      let votes = this.userDownoted || this.userUpvoted ? 2 : 1;
      // if its a downvote negate the value
      votes = method == 'downvote' ? votes * -1 : votes;

      this.vote(votes);
      this.updateVotingFlags(method);
    },
    vote(votes = 1) {
      this.$emit("voted", votes);
    },
    updateVotingFlags(voteMethod) {
      if (voteMethod == "upvote") {
        this.userUpvoted = true;
        this.userDownoted = false;
        return;
      }
      this.userUpvoted = false;
      this.userDownoted = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.votes {
  button.btn {
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