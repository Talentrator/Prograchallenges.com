<template>
  <b-container class="my-3 px-2 max-width d-block customTextWrap">
    <div class="text-center" v-if="!loaded">
      <b-spinner variant="primary" />
    </div>
    
    <div v-else-if="loaded && !isObjectEmpty(challengeData)" class="">
      <ChallengeModule v-model="code" :challenge="challengeData" />
      <FormulateComment @refetch="fetchData()" />
      <Comments :comments="challengeData.comments" />
    </div>
    <div class="" v-else>
      <h1 class="text-center">Challenge not found</h1>
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import ChallengeModule from "@/components/code-editor/ChallengeModule.vue";
import Comments from "./single-challenge/Comments.vue";
import FormulateComment from "./single-challenge/FormulateComment.vue";

export default {
  name: "SingleChallenge",
  data: () => ({
    code: "",
    challengeData: {},
    loaded: false,
  }),
  methods: {
    isObjectEmpty(obj) {
      
      return !obj ? false : Object.keys(obj).length === 0;
    },
    async fetchData() {
      const result = (
        await firebase.functions().httpsCallable("getSingleChallenge")({
          id: this.$route.params.id,
        })
      ).data;
      if (result) {
        this.challengeData = result
      }
      this.loaded = true;
    },
  },
  mounted() {
    this.fetchData();
  },

  components: {
    ChallengeModule,
    Comments,
    FormulateComment,
  },
};
</script>

<style scoped>
.customTextWrap {
  overflow-wrap: anywhere;
}
</style>
