<template>
  <b-container fluid="lg">
    <div class="w-100">
      <div class="">
        <h1 class="text-center mt-2">Create a multi choice question</h1>
        <p class="text-muted text-center mb-3">
          Write a question for others to attempt!
        </p>
      </div>
    </div>
    <b-row class="mt-5 justify-content-center">
      <b-col md="9">
        <div class="">
          <label class="form-label">Question</label>
          <b-form-textarea
            name="question"
            v-model="form.question"
            type="text"
            class="form__input"
            placeholder="Question"
            v-model.trim="$v.form.question.$model"
            :class="{
              'mb-2': !$v.form.question.$error,
            }"
          />
          <div v-if="$v.form.question.$dirty">
            <div class="error mb-2" v-if="!$v.form.question.required">
              Please input your question
            </div>
            <div class="error mb-2" v-if="!$v.form.question.minLength">
              Question must have at least
              {{ $v.form.question.$params.minLength.min }} letters.
            </div>
          </div>
        </div>

        <b-row>
          <b-col md="6">
            <b-form-group
              class="pt-2"
              label="Question Programming language"
              label-class="font-weight-bold"
            >
              <b-form-select
                v-model="form.programmingLanguage"
                :options="languages"
                :class="[
                  'w-100 form-select',
                  { 'mb-2': !$v.form.programmingLanguage.$error },
                ]"
              />
              <div v-if="$v.form.programmingLanguage.$dirty">
                <div
                  class="error mb-2"
                  v-if="!$v.form.programmingLanguage.required"
                >
                  Please select a programming language
                </div>
              </div>
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group
              class="pt-2"
              label="Question difficulty level"
              label-class="font-weight-bold"
            >
              <b-form-select
                v-model="form.difficulty"
                :options="difficultyLevels"
                :class="[
                  'w-100 form-select',
                  { 'mb-2': !$v.form.difficulty.$error },
                ]"
              />
              <div v-if="$v.form.difficulty.$dirty">
                <div class="error mb-2" v-if="!$v.form.difficulty.required">
                  Please select the question difficulty level
                </div>
              </div>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="6">
            <b-form-group
              class="pt-2"
              label="Question Score"
              label-class="font-weight-bold"
            >
              <b-form-input
                v-model.number="form.score"
                :class="[
                  'w-100 form-input',
                  { 'mb-2 ': !$v.form.score.$error },
                ]"
              />
              <div v-if="$v.form.score.$dirty">
                <div class="error mb-2" v-if="!$v.form.score.required">
                  Please input a score for the question
                </div>
                <div class="error mb-2" v-else-if="!$v.form.score.numeric">
                  Score must be a number
                </div>
                <div class="error mb-2" v-else-if="!$v.form.score.minValue">
                  Score must be greater than 0
                </div>
              </div>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group
              class="pt-2"
              label="Question duration (seconds)"
              label-class="font-weight-bold"
            >
              <b-form-input
                v-model.number="form.time"
                :class="['w-100 form-input', { 'mb-2 ': !$v.form.time.$error }]"
              />
              <div v-if="$v.form.time.$dirty">
                <div class="error mb-2" v-if="!$v.form.time.required">
                  Please input the questiion attempt duration (seconds)
                </div>
                <div class="error mb-2" v-else-if="!$v.form.time.numeric">
                  Duration must be a number
                </div>
                <div class="error mb-2" v-else-if="!$v.form.time.minValue">
                  Duration must be 1 seconds or more
                </div>
              </div>
            </b-form-group>
          </b-col>
        </b-row>

        Answers
        <b-row class="mt-2">
          <b-col cols="6" v-for="answer in answeOptions" :key="answer">
            <label class="form-label">{{ answer }}</label>
            <b-form-input
              name="question"
              v-model="form.answers[answer]"
              type="text"
              class="form__input"
              :placeholder="`Answer option ${answer}`"
              required
              :class="{
                'mb-2': !$v.form.answers[answer].$error,
              }"
            />
            <div v-if="$v.form.answers[answer].$dirty">
              <div class="error mb-2" v-if="!$v.form.answers[answer].required">
                Please input an answer
              </div>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          class="pt-2"
          label="Question correct answer"
          label-class="font-weight-bold"
        >
          <b-form-select
            v-model="form.correctAnswer"
            :options="selectAnsweOptions"
            :class="[
              'w-100 form-select',
              { 'mb-2': !$v.form.correctAnswer.$error },
            ]"
          />
          <div v-if="$v.form.correctAnswer.$dirty">
            <div class="error mb-2" v-if="!$v.form.correctAnswer.required">
              Please select the correct answer
            </div>
          </div>
        </b-form-group>

        <div class="my-4 text-center">
          <b-button
            variant="primary"
            class="text-white"
            :disabled="submitting"
            @click="submit"
          >
            Submit
            <b-spinner variant="white" class="ms-2" small v-if="submitting" />
          </b-button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import {
  required,
  minLength,
  minValue,
  numeric,
} from "vuelidate/lib/validators";
import ProgrammingLanguages from "@/mixins/ProgrammingLanguagesMixin.js";
import Auth from "@/mixins/AuthMixin";

export default {
  name: "QuestionsCreate",
  mixins: [ProgrammingLanguages, Auth],
  data() {
    return {
      submitting: false,
      answeOptions: ["A", "B", "C", "D"],
      form: {
        question: "",
        answers: {},
        difficulty: null,
        programmingLanguage: null,
        correctAnswer: null,
        score: 1,
        time: 5,
      },
      selectAnsweOptions: [
        {
          text: "Please select the question correct answer",
          value: null,
          disabled: true,
        },
        { text: "A", value: "A" },
        { text: "B", value: "B" },
        { text: "C", value: "C" },
        { text: "D", value: "D" },
      ],
      difficultyLevels: [
        {
          text: "Please select the question difficulty level ",
          value: null,
          disabled: true,
        },
        { text: "Easy", value: "easy" },
        { text: "Intermediate", value: "intermediate" },
        { text: "Expert", value: "expert" },
      ],
    };
  },
  methods: {
    async submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.submitting = true;
        // submit question
        const insertQuestion = firebase
          .functions()
          .httpsCallable("insertQuestion");

        this.form.username = this.userDetails.username  

        await insertQuestion(this.form);
        this.$v.$reset();
        this.$router.push({ name: "tld-home" })
      }
    },
  },
  validations: {
    form: {
      question: {
        required,
        minLength: minLength(4),
      },
      score: {
        required,
        minValue: minValue(1),
        numeric,
      },
      time: {
        required,
        minValue: minValue(1),
        numeric,
      },
      answers: {
        A: {
          required,
        },
        B: {
          required,
        },
        C: {
          required,
        },
        D: {
          required,
        },
      },
      programmingLanguage: {
        required,
      },
      difficulty: {
        required,
      },
      correctAnswer: {
        required,
      },
    },
  },
};
</script>