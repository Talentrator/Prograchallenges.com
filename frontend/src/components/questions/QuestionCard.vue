<template>
  <div
    :class="[
      'question-card h-100 p-3 position-relative',
      { 'd-none': !active },
    ]"
    @touchstart="handleTouchStart"
    :style="styles"
    @keyup="keyup"
    tabindex="0"
  >
    <answer-option
      :styles="styles"
      arrowDirection="up"
      :answerText="question.options['A']"
      answerOption="A"
    />
    <answer-option
      :styles="styles"
      arrowDirection="down"
      :answerText="question.options['C']"
      answerOption="C"
    />
    <b-row class="justify-content-center align-items-center h-100">
      <div class="text-start text-md-center px-3 col-md-8">
        <p class="question fs-5">
          {{ question.text }}
        </p>
        <!-- time and score -->
        <b-row class="mx-0 mt-5">
          <b-col cols="6" class="text-md-center text-start">
            <span>
              {{ formatTime(remainingTime) }}
            </span>
          </b-col>
          <b-col cols="6" class="text-md-center text-end">
            <span class=""> {{ question.score }} points </span>
          </b-col>
        </b-row>

        <b-row class="text-start px-3 mt-4">
          <b-col cols="6" class="d-flex">
            <answer-option
              :styles="styles"
              arrowDirection="left"
              :answerText="question.options['D']"
              answerOption="D"
              :vertical="false"
              class="text-start"
            />
          </b-col>
          <b-col cols="6" class="text-end">
            <answer-option
              :styles="styles"
              arrowDirection="right"
              :answerText="question.options['B']"
              answerOption="B"
              :vertical="false"
              class="text-end position-relative"
            />
          </b-col>
        </b-row>
      </div>
    </b-row>
  </div>
</template>

<script>
import Time from "@/mixins/TimeMixin.js";
import AnswerOption from "./AnswerOption.vue";

export default {
  components: { AnswerOption },
  name: "QuestionCard",
  emits: ["answered"],
  mixins: [Time],
  props: {
    question: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      xDown: null,
      yDown: null,
      userAnswer: null,
      gestureAnswers: [
        {
          direction: "up",
          answer: "A",
        },
        {
          direction: "right",
          answer: "B",
        },
        {
          direction: "down",
          answer: "C",
        },
        {
          direction: "left",
          answer: "D",
        },
      ],
      remainingTime: this.question.time,
      questionTimer: null,
    };
  },
  watch: {
    active(newValue) {
      if (newValue) {
        this.startCounter();
      }
    },
    canAnswer(newValue) {
      if (!newValue) {
        this.answer();
      }
    },
  },
  computed: {
    canAnswer() {
      return this.remainingTime > 0;
    },
    styles() {
      let background = "#fff",
        color = "#000";
      if (this.question.colors) {
        background = this.question.colors.background;
        color = this.question.colors.color;
      }
      return { background, color };
    },
  },
  methods: {
    enter() {
      this.scroll.refresh();
      this.scroll.scrollTo(0, 0);
    },
    afterEnter() {
      this.swiper.$emit('pageAnimationEnd');
    },
    startCounter() {
      this.questionTimer = setInterval(() => {
        if (this.remainingTime <= 0) {
          this.stopCounter();
          return;
        }
        this.remainingTime -= 1;
      }, 1000);
    },
    stopCounter() {
      if (this.questionTimer) clearInterval(this.questionTimer);
    },
    findGestureAnswer(dir) {
      let answ = this.gestureAnswers.find(({ direction }) => direction == dir);
      return answ ? answ.answer : answ;
    },
    handleTouchStart(evt) {
      const firstTouch = evt.touches[0];
      this.xDown = firstTouch.clientX;
      this.yDown = firstTouch.clientY;

      addEventListener("touchmove", this.handleTouchMove, false);
    },
    handleTouchMove(evt) {
      if (!this.xDown || !this.yDown) {
        return;
      }

      let xUp = evt.touches[0].clientX;
      let yUp = evt.touches[0].clientY;

      let xDiff = this.xDown - xUp;
      let yDiff = this.yDown - yUp;

      let direction = "";

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (Math.abs(xDiff) < window.innerWidth / 4) return;
        direction = xDiff < 0 ? "right" : "left";
      } else {
        if (Math.abs(yDiff) < window.innerWidth / 4) return;
        direction = yDiff < 0 ? "down" : "up";
      }
      //
      this.userAnswer = this.findGestureAnswer(direction);
      this.answer(this.userAnswer);
      /* reset values */
      this.xDown = null;
      this.yDown = null;
    },
    answer(answ) {
      this.$emit("answered", {
        answer: answ,
        questionId: this.question.id,
        duration: this.question.time - this.remainingTime,
      });
      this.stopCounter();
    },
    keyup(e) {
      const directionKeyValues = {
        37: "D",
        38: "A",
        39: "B",
        40: "C",
      };
      if (directionKeyValues[e.which]) {
        this.answer(directionKeyValues[e.which]);
      }
    },
  },
  mounted() {
    if (this.active) this.startCounter();
    this.$el.focus();
  },
};
</script>