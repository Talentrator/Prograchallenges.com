<template>
  <b-container fluid="lg">
    <b-row>
      <b-col md="4" class="d-flex align-items-center">
        <div class="w-100">
          <div class="d-block d-md-none mb-3">
            <h1 class="text-center mt-2">Create a challenge</h1>
            <p class="text-muted text-center mb-3">
              Write your own challenge for others to attempt!
            </p>
          </div>

          <steps :currentStep="currentStep" @changeStep="changeStep" />
        </div>
      </b-col>
      <b-col md="8">
        <div class="px-1 px-md-3 pt-2 pb-4 mx-auto max-width">
          <div class="d-none d-md-block">
            <h1 class="text-center mt-2">Create a challenge</h1>
            <p class="text-muted text-center mb-3">
              Write your own challenge for others to attempt!
            </p>
          </div>
          <b-form class="px-0 gig-small-container">
            <div v-show="currentStep == 1">
              <first-step :data="form" @nextStep="nextStep" ref="firstStep" />
            </div>

            <div v-show="currentStep == 2">
              <second-step :data="form" @nextStep="nextStep" ref="secondStep" />
            </div>

            <div v-show="currentStep == 3">
              <third-step
                ref="thirdStep"
                @nextStep="nextStep"
                :submitting="submitting"
                :data="form"
              />
            </div>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import Steps from "@/components/stepper/Steps.vue";

import FirstStep from "@/components/stepper/FirstStep.vue";
import SecondStep from "@/components/stepper/SecondStep.vue";
import ThirdStep from "@/components/stepper/ThirdStep.vue";

export default {
  name: "CreateChallenge",
  data() {
    return {
      currentStep: 1,
      form: {
        title: "",
        email: "",
        nickname: "",
        text: "",
        programmingLanguage: null,
        boilerplate: "",
        unitTest: "",
        exampleSolution: "",
        difficulty: null,
      },
      submitting: false,
    };
  },
  methods: {
    changeStep(step, stepper = false) {
      if (stepper) {
        if (step == 2 && this.currentStep != 3) {
          this.validateStep("firstStep");
        } else if (step == 3) {
          if (this.$refs.firstStep.isValidStep()) {
            this.validateStep("secondStep");
          }
        } else if (this.currentStep == 3) {
          this.currentStep = +step;
        } else {
          this.currentStep = 1;
        }
        return;
      }
      this.currentStep = +step;
    },
    validateStep(stepRef) {
      this.$refs[stepRef].changeStep();
    },
    nextStep(data, submit = false) {
      this.form = { ...this.form, ...data };
      submit ? this.handleSubmit() : this.changeStep(this.currentStep + 1);
    },
    allStepsValid() {
      console.log(this.$refs.thirdStep);
      return (
        this.$refs.firstStep.isValidStep() &&
        this.$refs.secondStep.isValidStep() &&
        this.$refs.thirdStep.isValidStep()
      );
    },
    async handleSubmit() {
      this.$v.$touch();
      if (this.allStepsValid()) {
        this.submitting = true;
        const insertChallenge = firebase
          .functions()
          .httpsCallable("insertChallenge");
        const result = await insertChallenge(this.form);
        this.$router.push(`/challenge/${result.data}`);
        this.$v.$reset();
      }
    },
  },
  validations: {
    form: {},
  },
  components: {
    Steps,
    FirstStep,
    SecondStep,
    ThirdStep,
  },
};
</script>