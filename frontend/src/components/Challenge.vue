<template>
  <div
    class="
      mx-1 mx-md-5
      p-1 p-md-2
      text-white
      border border-primary
      d-flex
      justify-content-between
      align-items-center
      singleChallenge
    "
    @click="redirectToSingleChallenge(item.id)"
  >
    <div>
      <h5>{{ item.title }}</h5>
      <p class="m-0">by {{ item.nickname }}</p>
    </div>
    <router-link :to="`/challenge/${item.id}`">
      <b-button variant="primary" class="p-1 p-md-2">attempt</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Challenges",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    redirectToSingleChallenge: function (id) {
      this.$router.push({ path: `/challenge/${id}` });
    },
  },
  mounted() {
    if (this.item.title.length > 23) {
      this.item.title = this.item.title.slice(0, 20) + "...  ";
    }
  },
};
</script>

<style scoped>
.singleChallenge {
  cursor: pointer;
}
</style>
