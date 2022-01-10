<template>
  <div class="votes fs-6">
    <button class="btn btn-sm ms-2 upvote">
      <b-icon-chevron-up class="fs-6" />
    </button>
    <small class="">{{upvotes}}</small>
    <button class="btn btn-sm ms-2 text-white upvote">
      <b-icon-chevron-down class="fs-6" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Voting",
  props: {
    upvotes: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.votes {
  button.btn {
    padding-left: calc($spacer / 2) !important;
    padding-right: calc($spacer / 2) !important;
    color: darken($color: $white, $amount: 30) !important;
    &:hover {
      color: $white !important;
    }
  }
}
</style>