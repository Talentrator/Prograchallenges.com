<template>
  <div class="bg-dark my-2">
    <b-container class="text-light">
      <div class="text-center max-width mx-auto">
        <b-table
          :current-page="currentPage"
          :items="challenges"
          :per-page="perpage"
          class="text-light mt-4"
          outlined
        ></b-table>
        <b-pagination
          :total-rows="challenges.length"
          :per-page="perpage"
          v-model="currentPage"
          v-if="pagination"
          class="mb-0"
          align="center"
          limit=3
          first-number
          last-number
        ></b-pagination>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Challenges",
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
  },
};
</script>

<style scoped>
.table > :not(:last-child) > :last-child > *{
  border-bottom-color: unset !important;
}
.table {
  border-color: rgba(255, 255, 255, 0.3) !important;
}
</style>
