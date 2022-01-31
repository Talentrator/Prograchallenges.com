<template>
  <div
    class="position-fixed top-0 bottom-0 start-0 w-100 flash-screen bg-white"
  >
    <transition
      name="custom"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class=""
      v-for="(question, i) in questions"
      :key="question.id"
    >
      <question-card
        :active="activeQuestion == i"
        v-if="activeQuestion == i"
        :question="question"
        @answered="recordAnswer"
      />
    </transition>
    <transition
      name="custom"
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class=""
    >
      <results-card
        :questions="questions"
        :answers="userAnswers"
        v-if="showResults"
        @close="$emit('close')"
      />
    </transition>
  </div>
</template>

<script>
import QuestionCard from "./QuestionCard.vue";
import ResultsCard from "./ResultsCard.vue";

export default {
  components: { QuestionCard, ResultsCard },
  name: "QuestionCards",
  emits: ["close"],
  props: {
    questions: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      activeQuestion: 0,
      userAnswers: [],
      showResults: false,
    };
  },
  methods: {
    nextQuestion() {
      if (this.activeQuestion >= this.questions.length - 1) {
        this.showResults = true;
        this.activeQuestion = null;
        return;
      }
      this.activeQuestion++;
    },
    recordAnswer({ answer = "", duration, questionId, skipped = false }) {
      this.userAnswers.push({
        answer,
        duration,
        questionId,
        skipped,
      });
      this.nextQuestion();
    },
  },
};
</script>
<style lang="scss">
.flash-screen {
  z-index: 1000;
  overflow: hidden;
}
</style>