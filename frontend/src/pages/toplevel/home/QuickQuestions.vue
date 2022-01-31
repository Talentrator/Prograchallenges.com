<template>
  <b-container class="mb-md-5 mb-3 pt-3 mt-4">
    <h1 class="border-primary border-top py-4 border-2">Quick Questions</h1>

    <div class="my-4 text-center">
      <b-button variant="secondary" @click="showFlashScreen">Start</b-button>
    </div>
    <question-cards v-if="show" @close="closeFlashScreen" />
  </b-container>
</template>

<script>
import QuestionCards from "@/components/questions/QuestionCards.vue";
import firebase from "firebase/app";
import "firebase/functions";

export default {
  components: { QuestionCards },
  name: "QuickQuestions",
  data() {
    return {
      show: false,
      fetching: false,
      questions: []
    };
  },
  methods: {
    async showFlashScreen() {
      document.body.style.overflowY = "hidden";
      document.documentElement.style.overflowY = "hidden";
      await this.fetchQuestions()
      this.show = true;
    },
    async fetchQuestions(){
      this.fetching = true;
      const getQuestions = firebase
                .functions()
                .httpsCallable("getQuestions");

      const result = await getQuestions({limit: 10}); 
      
      this.questions = result.data;

      console.log(this.questions);

    },
    closeFlashScreen() {
      this.show = false;
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    },
  },
};
</script>