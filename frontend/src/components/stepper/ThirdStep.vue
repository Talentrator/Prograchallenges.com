<template>
  <div>
    <h3>About the code</h3>
    Boilerplate Code
    <CodeEditor
      v-model="form.boilerplate"
      :lang="form.programmingLanguage"
      :key="form.programmingLanguage + '1'"
      editorHeight="200px"
    />
    Unit-Test for the code.
    <CodeEditor
      v-model="form.unitTest"
      :lang="form.programmingLanguage"
      :key="form.programmingLanguage + '2'"
      editorHeight="200px"
    />
    Example solution to check that your unit tests are correct.
    <CodeEditor
      v-model="form.exampleSolution"
      :lang="form.programmingLanguage"
      :key="form.programmingLanguage + '3'"
      editorHeight="200px"
    />
    <div class="text-center">
      <b-button block @click="runTest()" class="mt-2 p-1">
        <b-icon-caret-right v-if="!runningCode" />
        <b-spinner small v-else />
      </b-button>
    </div>
    <div v-if="codeOutput && !runningCode" class="mt-2 px-2">
      <div class="" v-if="!erronoeusResult(codeOutput)">
        <div class="text-secondary d-flex align-items-center">
          <b-icon-check2-circle class="text-secondary fs-2" />
          <span class="ui-icon-label tab-item-label ps-1">
            {{ passedTestsFormattedText }}
          </span>
        </div>
        <div
          class="mt-2 text-primary d-flex align-items-center"
          v-if="failed > 0"
        >
          <b-icon-x class="text-primary fs-2" />
          <span class="ui-icon-label tab-item-label ps-1">
            {{ failedTestsFormattedText }}</span
          >
        </div>
      </div>
      <span style="white-space: pre-wrap" v-else>
        {{ codeOutput }}
      </span>
    </div>

    <!-- {{ form.programmingLanguage }} -->
    <div class="d-flex my-2 justify-content-end text-primary">
      <b-button variant="outline-primary" @click="changeStep">
        SUBMIT
        <b-spinner variant="primary" small v-if="submitting" />&nbsp;
        <b-icon-arrow-right-circle-fill v-if="!submitting" />
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import CodeEditor from "@/components/code-editor/CodeEditor.vue";
import TestOutputMixin from "@/mixins/TestOutputMixin.js";
import firebase from "firebase/app";

export default {
  name: "ThirdStep",
  emits: ["nextStep"],
  components: { CodeEditor },
  mixins: [TestOutputMixin],
  props: {
    data: {
      type: Object,
      required: true,
    },
    submitting: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      codeOutput: "",
      runningCode: false,
      form: {
        boilerplate: this.data.boilerplate || "",
        unitTest: this.data.unitTest || "",
        exampleSolution: this.data.exampleSolution || "",
      },
    };
  },
  methods: {
    isValidStep() {
      return true;
    },
    changeStep() {
      if (this.isValidStep()) {
        this.$emit("nextStep", this.form, true);
      }
    },
    async runTest() {
      this.runningCode = true;
      this.failed = this.passed = 0;

      this.codeOutput = (
        await firebase.functions().httpsCallable("RunCode")({
          code: `${this.form.exampleSolution}
${this.form.unitTest}`,
          lang: this.form.programmingLanguage,
        })
      ).data;
      this.runningCode = false;

      this.parseResult(this.codeOutput);
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      nickname: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
    },
  },
};
</script>