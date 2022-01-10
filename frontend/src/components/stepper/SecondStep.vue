<template>
  <div>
    <h3>About the challenge</h3>

    <form
      :class="{
        'form-group--error': $v.form.title.$error,
        'form-group--ok': !$v.form.title.$error && $v.form.title.$dirty,
      }"
    >
      <label class="form-label">Challenge Title</label>
      <b-form-input
        name="title"
        v-model="form.title"
        type="text"
        class="form__input"
        placeholder="Challenge Title"
        v-model.trim="$v.form.title.$model"
        :class="{
          'mb-2': !$v.form.title.$error,
        }"
      />
      <div v-if="$v.form.title.$dirty">
        <div class="error mb-2" v-if="!$v.form.title.required">
          Please input title
        </div>
        <div class="error mb-2" v-if="!$v.form.title.minLength">
          Title must have at least
          {{ $v.form.title.$params.minLength.min }} letters.
        </div>
      </div>
    </form>

    <form
      :class="{
        'form-group--error': $v.form.text.$error,
        'form-group--ok': !$v.form.text.$error && $v.form.text.$dirty,
      }"
    >
      <b-form-group
        class="pt-2"
        label="Challenge Programming language"
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
          <div class="error mb-2" v-if="!$v.form.programmingLanguage.required">
            Please select a programming language
          </div>
        </div>
      </b-form-group>

      <b-form-group
        class="pt-2"
        label="Challenge difficulty level"
        label-class="font-weight-bold"
      >
        <b-form-select
          v-model="form.difficulty"
          :options="difficultyLevels"
          :class="['w-100 form-select', { 'mb-2': !$v.form.difficulty.$error }]"
        />
        <div v-if="$v.form.difficulty.$dirty">
          <div class="error mb-2" v-if="!$v.form.difficulty.required">
            Please select the challenge difficulty level
          </div>
        </div>
      </b-form-group>
      <!-- challenge description -->
      <label class="form-label">Challenge Description</label>
      <div v-if="!previewMarkdown">
        <b-form-textarea
          label="Challenge description"
          v-model="form.text"
          rows="10"
          name="text"
          placeholder="Provide the description of your challenge here. PS. You can use markup"
          v-model.trim="$v.form.text.$model"
          class="form__input"
          :class="{
            'mb-2': !$v.form.text.$error,
          }"
        />
        <div v-if="$v.form.text.$dirty">
          <div class="error mb-2" v-if="!$v.form.text.required">
            Please input some challenge text
          </div>
          <div class="error mb-2" v-if="!$v.form.text.minLength">
            Your challenge description must be at least 20 characters long
          </div>
        </div>
      </div>
      <div v-else>
        <div v-html="markdownToHtml"></div>
      </div>
    </form>

    <b-row>
      <b-col xs="6">
        <!-- toggle preview button -->
        <b-button
          variant="secondary"
          size="sm"
          class="px-1 py-1 mb-1 text-capitalize"
          @click="previewMarkdown = !previewMarkdown"
          >{{ previewMarkdown ? "Continue Editing" : "Preview" }}
        </b-button>
      </b-col>
      <b-col xs="6">
        <b-button variant="outline-primary" @click="changeStep()">
          Next
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { marked } from "marked";
import ProgrammingLanguagesMixin from "@/mixins/ProgrammingLanguagesMixin.js";

export default {
  name: "SecondStep",
  emits: ["nextStep"],
  mixins: [ProgrammingLanguagesMixin],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      previewMarkdown: false,
      form: {
        title: this.data.title || "",
        text: this.data.text || "",
        programmingLanguage: this.data.programmingLanguage || null,
        difficulty: this.data.difficulty || null,
      },
      difficultyLevels: [
        {
          text: "Please select the challenge difficulty level ",
          value: null,
          disabled: true,
        },
        { text: "Easy", value: "easy" },
        { text: "Intermediate", value: "intermediate" },
        { text: "Expert", value: "expert" },
      ],
    };
  },
  computed: {
    markdownToHtml() {
      return marked(this.form.text);
    },
  },
  methods: {
    isValidStep() {
      this.$v.form.title.$touch();
      this.$v.form.text.$touch();
      this.$v.form.programmingLanguage.$touch();
      this.$v.form.difficulty.$touch();

      return (
        !this.$v.form.title.$error &&
        !this.$v.form.text.$error &&
        !this.$v.form.programmingLanguage.$error &&
        !this.$v.form.difficulty.$error
      );
    },
    changeStep() {
      if (this.isValidStep()) {
        this.$emit("nextStep", this.form);
      }
    },
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      text: {
        required,
        minLength: minLength(20),
      },
      programmingLanguage: {
        required,
      },
      difficulty: {
        required,
      },
    },
  },
};
</script>