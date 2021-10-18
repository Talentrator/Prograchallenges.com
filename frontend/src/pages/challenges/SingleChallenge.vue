<template>
  <b-container class="my-3 px-2 max-width d-block customTextWrap">
    <div class="text-center" v-if="!loaded">
      <b-spinner variant="primary" />
    </div>
    <div v-else>
      <ChallengeModule v-model="code" :challenge="challengeData" />
      <FormulateComment @refetch="fetchData()"/>
      <Comments :comments="challengeData.comments" />
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";
import ChallengeModule from "@/components/code-editor/ChallengeModule.vue";
import Comments from "./single-challenge/Comments.vue";
import FormulateComment from "./single-challenge/FormulateComment.vue";

import textToHTMLDisplayable from "./helpers/text_to_html_displayble";

export default {
  name: "SingleChallenge",
  data: () => ({
    code: "",
    challengeData: {},
    loaded: false,
  }),
  methods: {
    async fetchData() {
      this.challengeData = (
        await firebase.functions().httpsCallable("getSingleChallenge")({
          id: this.$route.params.id,
        })
      ).data;
      this.challengeData.text = textToHTMLDisplayable(this.challengeData.text);
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
