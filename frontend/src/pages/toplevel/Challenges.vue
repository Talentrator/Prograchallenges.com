<template>
  <b-container class="text-light">
    <div class="text-light w-100">
      <h1 class="text-center letter-spacing pb-2 display-4 mt-4">Challenges</h1>
      <p class="text-center">
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>

      <div class="text-center" v-if="!loaded">
        <b-spinner variant="primary" />
      </div>

      <!-- Single challenge component -->
      <div v-else>
        <div class="mb-3 row">
          <div class="col-md-9"></div>
          <div class="col-md-3">
            <div class="d-flex align-items-center">
              <label for="" class="fw-bold pe-2">Sort: </label>
              <b-select name="sort" id="">
                <option value="newest">Newest</option>
                <option value="comments">Most Comments</option>
              </b-select>
            </div>
          </div>
        </div>
        <div
          v-for="challenge in paginatedChallenges"
          :key="challenge.id"
          class="my-3 mx-auto max-width d-flex align-items-center flex-column"
        >
          <Challenge :challenge="challenge" />
        </div>

        <b-pagination
          @change="onPageChanged"
          :total-rows="challenges.length"
          :per-page="perPage"
          v-model="currentPage"
          class="my-0 customPagination"
          align="center"
        />
      </div>

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
import firebase from "firebase/app";
import "firebase/functions";
import Challenge from "../../components/ChallengeCard.vue";
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
      this.challenges = result.data;
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
