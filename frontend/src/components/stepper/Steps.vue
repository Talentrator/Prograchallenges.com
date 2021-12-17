<template>
  <span class="w-100">
    <div class="steps d-none d-md-block">
      <div
        :class="`step rounded ${index + 1 === currentStep ? 'active' : ''}`"
        v-for="(step, index) in steps"
        :key="step.title"
      >
        <div
          class="d-flex align-items-center step-title"
          @click="changeStep($event)"
          :data-step="index + 1"
        >
          {{ step.title }} ({{ index + 1 }})
        </div>
        <div class="step-details">
          <p class="pt-3">
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="smallscreen-steps d-md-none d-block w-100">
      <div class="w-100">
        <div class="d-flex">
          <div
            :class="`step ${index + 1 <= currentStep ? 'active' : ''}`"
            v-for="(step, index) in steps"
            :key="step.title"
          >
            <div
              class="border"
              @click="changeStep"
              :data-step="index + 1"
              :title="step.description"
            >
              {{ index + 1 }}
            </div>
          </div>
        </div>
        <p class="text-muted text-center my-4">
          {{ currentStepDetails.description }}
        </p>
      </div>
    </div>
  </span>
</template>

<script>
import "@/assets/scss/steps.scss";

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
  computed: {
    currentStepDetails() {
      return this.steps[this.currentStep - 1];
    },
  },
  methods: {
    changeStep(event) {
      let step = event.target.dataset.step || 1;
      this.$emit("changeStep", step);
    },
  },
};
</script>