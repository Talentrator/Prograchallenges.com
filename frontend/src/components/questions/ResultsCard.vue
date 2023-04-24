<template>
  <div class="question-card h-100 p-2 p-md-3" :style="style">
    <div class="text-end">
      <button
        type="button"
        class="btn-close btn-close-white"
        aria-label="Close"
        @click="$emit('close')"
      ></button>
    </div>
    <b-row class="justify-content-center align-items-center h-100">
      <div class="col-md-8">
        <p class="text-center fs-1 fw-bold">
          Hello {{ firstName }}, your score is
        </p>
        <h2 class="text-center fw-bold mt-5 fs-1">
          <span class="p-4 text-primary">{{ percentScore }}% 🥳</span>
        </h2>
        <div class="breakdown mt-5 fs-5">
          <p class="">Correct answers: {{ correctAnswers.length }}</p>
          <p class="">Wrong answers: {{ wrongAnswers.length }}</p>
          <p class="">Score: {{totalScore}} out of {{questionsTotalScore}}</p>
          <p class="">Time taken: {{ timeTaken }}</p>
          <p class="d-none">Ranking: 5</p>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import Time from "@/mixins/TimeMixin.js";
import Auth from "@/mixins/AuthMixin.js";

export default {
  name: "ResultsCard",
  mixins: [Time, Auth],
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
        background: "rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important",
        color: "rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important",
      };
    },
    correctAnswers() {
      return this.questions.filter(
        (question, index) =>
          question.correctAnswer == this.answers[index].answer
      );
    },
    wrongAnswers() {
      return this.questions.filter(
        (question, index) =>
          question.correctAnswer != this.answers[index].answer
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