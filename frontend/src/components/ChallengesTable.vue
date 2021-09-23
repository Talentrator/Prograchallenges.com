<template>
  <div class="bg-dark my-4">
    <b-container class="text-light">
      <div class="text-center">
        <b-table
          :current-page="currentPage"
          :items="challenges"
          :per-page="perpage"
          class="text-light"
        ></b-table>
        <b-pagination
          :total-rows="challenges.length"
          :per-page="perpage"
          v-model="currentPage"
          v-if="pagination"
        ></b-pagination>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ChallengesTable",
  props: {
    challenges: {
      type: Array,
    },
    pagination: { type: Boolean },
  },
  data() {
    return {
      perpage: 20,
      currentPage: 1,
    };
  }
};
</script>
