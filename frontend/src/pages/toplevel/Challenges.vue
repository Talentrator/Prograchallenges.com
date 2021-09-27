<template>
  <b-container class="text-light">
    <div class="text-center text-light">
      <h1 class="letter-spacing pb-2 display-4 mt-4">Challenges</h1>
      <p>
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>

      <div class="text-center" v-if="!loaded">
        <b-spinner variant="primary" />
      </div>

      <!-- Single challenge component -->
      <div
        v-for="item in paginatedChallenges"
        :key="item.id"
        class="my-3 mx-auto max-width"
      >
        <Challenge :item="item" />
      </div>

      <b-pagination
        @change="onPageChanged"
        :total-rows="challenges.length"
        :per-page="perPage"
        v-model="currentPage"
        class="my-0 customPagination"
        align="center"
      />

      <div
        class="
          text-center text-light
          my-4
          border-primary border-2 border-top
          pt-4
        "
      >
        <h1 class="letter-spacing pb-2 display-4">Create</h1>
        <p>Write your own challenge for others to attempt!</p>
        <b-link
          class="btn btn-primary mt-3"
          style="border: none"
          :to="{ name: 'clg-create' }"
        >
          Create
        </b-link>
      </div>
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";
import Challenge from "../../components/Challenge.vue";
export default {
  name: "Challenges",
  components: { Challenge },
  data: function () {
    return {
      challenges: [],
      paginatedChallenges: this.challenges,
      currentPage: 1,
      perPage: 10,
      totalRows: this.lengthOfChallenges,
      loaded: false,
    };
  },
  computed: {
    lengthOfChallenges() {
      return this.challenges.length;
    },
  },
  methods: {
    paginate(page_size, page_number) {
      let challengesToParse = this.challenges;
      this.paginatedChallenges = challengesToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
    async fetchData() {
      const getAllChallenges = firebase
        .functions()
        .httpsCallable("getAllChallenges");
      const result = await getAllChallenges();
      this.challenges = result.data.slice(0, 10);
      this.paginate(this.perPage, 0);
      this.loaded = true;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
.customPagination > li > button,
.customPagination > li > span {
  color: #fff !important;
  border: none !important;
  background-color: #151515 !important;
}

.customPagination > li.active > button {
  background-color: #000 !important;
}
</style>
