<template>
  <div class="steps">
    <div
      :class="`step rounded ${index + 1 === currentStep ? 'active' : ''}`"
      v-for="(step, index) in steps"
      :key="step.title"
      @click="changeStep(index + 1)"
    >
      <div class="d-flex align-items-center step-title">
        {{ step.title }} ({{ index + 1 }})
      </div>
      <div class="step-details">
        <p class="pt-3">
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Steps",
  emits: ["changeStep"],
  props: {
    currentStep: {
      default: 1,
      type: Number,
    },
  },
  data() {
    return {
      steps: [
        {
          title: "Personal information",
          description: "Let other people know who posted the challenge",
        },
        {
          title: "About the challenge",
          description:
            "Please provide a catchy title for your challenge and a description of the challenge.",
        },
        {
          title: "About the code",
          description:
            "Define the bolerplate code and unit tests of the challenge.",
        },
      ],
    };
  },
  methods: {
    changeStep(step) {
      this.$emit("changeStep", step);
    },
  },
};
</script>

<style lang="scss">
.steps {
  margin: 20px 0 20px 20px;
  //   max-width: 300px;
  width: 100%;
  .step {
    min-height: 50px;
    border: 1px solid #ddd;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    .step-title {
      height: 50px;
    }
    &.active {
      border: 1px solid map-get($map: $theme-colors, $key: primary);
      .step-title {
        font-weight: bold;
      }
      .step-details {
        display: block;
      }
    }
    .step-details {
      display: none;
      transition: all 0.3s linear;
    }
  }
}
</style>