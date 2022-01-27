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
// import "animate.css";

export default {
  components: { QuestionCard, ResultsCard },
  name: "QuestionCards",
  emits: ["close"],
  data() {
    return {
      activeQuestion: 0,
      userAnswers: [],
      showResults: false,
      questions: [
        {
          id: 1,
          text: "Which of the following is not a core data type in Python programming?",
          language: "python",
          options: {
            A: "Lists",
            B: "Tuples",
            C: "Dictionary",
            D: "Class",
          },
          answer: "D",
          time: 20, //in seconds
          score: 5,
          colors: {
            background: "#F1948A",
            color: "#fefefe"
          }
        },
        {
          id: 2,
          text: "Which keyword is used for function in Python language?",
          language: "python",
          options: {
            A: "Function",
            B: "Def",
            C: "Fun",
            D: "Define",
          },
          answer: "B",
          time: 15, //in seconds
          score: 5,
          colors: {
            background: "#76D7C4",
            color: "#fefefe"
          }
        },
        {
          id: 3,
          text: "Which of the following character is used to give single-line comments in Python?",
          language: "python",
          options: { A: "//", B: "#", C: "!", D: "/*" },
          answer: "B",
          time: 30, //in seconds
          score: 5,
          colors: {
            background: "#BB8FCE",
            color: "#fefefe"
          }
        },
      ],
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