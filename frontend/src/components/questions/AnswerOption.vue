<template>
  <div :class="['answer start-0', `${arrowDirection}`,{ 'w-100 ans text-center': vertical }]">
    <template class="" v-if="vertical">
      <p class="">{{ arrowDirection == 'up' ? answerText : answerOption }}</p>
      <arrow-scroll-animation
        class="d-inline-block my-2 d-sm-none"
        :direction="arrowDirection"
        :color="styles.color"
      />
      <kbd class="d-none my-2 d-sm-inline-block px-2" v-html="kbdValue"></kbd>
      <p class="fw-bold">{{ arrowDirection == 'down' ? answerText : answerOption }}</p>
    </template>
    <template class="" v-else>
      <arrow-scroll-animation
        class="d-inline-block my-2 d-sm-none"
        :direction="arrowDirection"
        :color="styles.color"
      />
      <kbd class="d-none my-2 d-sm-inline-block px-2" v-html="kbdValue"></kbd>

      <div class="">
        <p class="fw-bold">{{ answerOption }}</p>
        <p class="">{{ answerText }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import ArrowScrollAnimation from "./ArrowScrollAnimation.vue";
export default {
  name: "AnswerOption",
  components: { ArrowScrollAnimation },
  props: {
    styles: {
      type: Object,
      required: true,
    },
    arrowDirection: {
      type: String,
      required: true,
    },
    answerText: {
      type: String,
      required: true,
    },
    answerOption: {
      type: String,
      required: true,
    },
    vertical: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    kbdValue() {
      const directionKbd = {
        up: "&uarr;",
        left: "&larr;",
        down: "&darr;",
        right: "&rarr;",
      };

      return directionKbd[this.arrowDirection];
    },
  },
};
</script>

<style lang="scss">
.ans {
  position: absolute;
  &.up {
    top: 5%;
  }
  &.down {
    bottom: 5%;
  }
}
</style>