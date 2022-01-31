<template>
  <div class="question-card h-100 p-3" :style="style">
    <div class="text-end">
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="$emit('close')"
      ></button>
    </div>
    <b-row class="justify-content-center align-items-center h-100">
      <div class="col-md-8">
        <p class="text-center fs-1 fw-bold">Hello there, your score is</p>
        <h2 class="text-center fw-bold mt-5 fs-1">
          <span class="p-4">{{ percentScore }}%</span>
        </h2>
        <div class="breakdown mt-5 fs-5">
          <p class="">Correct answers: {{ correctAnswers.length }}</p>
          <p class="">Wrong answers: {{ wrongAnswers.length }}</p>
          <p class="">Time taken: {{ timeTaken }}</p>
          <p class="">Ranking: 5</p>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import Time from "@/mixins/TimeMixin.js";

export default {
  name: "ResultsCard",
  mixins: [Time],
  emits: ["close"],
  props: {
    answers: {
      type: Array,
      required: true,
    },
    questions: {
      type: Array,
      required: true,
    },
  },
  computed: {
    style() {
      return {
        background: "#F1948A",
        color: "#fefefe",
      };
    },
    correctAnswers() {
      return this.questions.filter(
        (question, index) => question.correctAnswer == this.answers[index].answer
      );
    },
    wrongAnswers() {
      return this.questions.filter(
        (question, index) => question.correctAnswer != this.answers[index].answer
      );
    },
    totalScore() {
      return this.correctAnswers.reduce(
        (acc, question) => acc + question.score,
        0
      );
    },
    questionsTotalScore() {
      return this.questions.reduce((acc, question) => acc + question.score, 0);
    },
    percentScore() {
      return Math.ceil((this.totalScore / this.questionsTotalScore) * 100);
    },
    timeTaken() {
      return this.formatTime(
        this.answers.reduce((acc, answer) => acc + answer.duration, 0)
      );
    },
  },
  methods: {},
};
</script>
