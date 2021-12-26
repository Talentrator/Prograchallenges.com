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
            <template v-if="currentStep == 1">
              <h3>About yourself</h3>
              <b-row class="p-0 m-0">
                <b-col lg="12" md="12">
                  <div
                    :class="{
                      'form-group--error': $v.form.email.$error,
                      'form-group--ok':
                        !$v.form.email.$error && $v.form.email.$dirty,
                    }"
                  >
                    <label class="form-label">Email</label>
                    <b-form-input
                      name="email"
                      v-model="form.email"
                      type="email"
                      class="form__input"
                      placeholder="codemonkey@gmail.com"
                      v-model.trim="$v.form.email.$model"
                      :class="{
                        'mb-2': !$v.form.email.$error,
                      }"
                    />
                    <div v-if="$v.form.email.$dirty">
                      <div class="error mb-2" v-if="!$v.form.email.required">
                        Please input email
                      </div>
                      <div class="error mb-2" v-if="!$v.form.email.email">
                        Please enter a valid email
                      </div>
                    </div>
                  </div>
                </b-col>
                <b-col lg="12" md="12">
                  <div
                    :class="{
                      'form-group--error': $v.form.nickname.$error,
                      'form-group--ok':
                        !$v.form.nickname.$error && $v.form.nickname.$dirty,
                    }"
                  >
                    <label class="form-label">Username</label>
                    <b-form-input
                      name="name"
                      v-model="form.nickname"
                      type="text"
                      placeholder="greatcoder12"
                      v-model.trim="$v.form.nickname.$model"
                      class="form__input"
                      :class="{
                        'mb-2': !$v.form.nickname.$error,
                      }"
                    />
                    <div v-if="$v.form.nickname.$dirty">
                      <div class="error mb-2" v-if="!$v.form.nickname.required">
                        Please input a nickname
                      </div>
                      <div
                        class="error mb-2"
                        v-if="
                          !$v.form.nickname.minLength ||
                          !$v.form.nickname.maxLength
                        "
                      >
                        Your nickname must be 4-20 characters long
                      </div>
                    </div>
                  </div>
                </b-col>
                <div class="text-center mt-2">
                  <b-button variant="outline-primary" @click="changeStep(2)">
                    Next
                  </b-button>
                </div>
              </b-row>
            </template>

            <template v-if="currentStep == 2">
              <h3>About the challenge</h3>

              <form
                :class="{
                  'form-group--error': $v.form.title.$error,
                  'form-group--ok':
                    !$v.form.title.$error && $v.form.title.$dirty,
                }"
              >
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
                <b-button
                  variant="secondary"
                  size="sm"
                  class="px-1 py-1 mb-1 text-capitalize"
                  @click="previewMarkdown = !previewMarkdown"
                  >{{ previewMarkdown ? "Continue Editing" : "Preview" }}
                </b-button>
                <div v-if="!previewMarkdown">
                  <b-form-textarea
                    v-model="form.text"
                    rows="10"
                    name="text"
                    placeholder="Your awesome challenge here"
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
                      Your challenge description must be at least 20 characters
                      long
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div v-html="markdownToHtml"></div>
                </div>
                <b-form-group
                  class="pt-2"
                  label="Test Programming language"
                  label-class="font-weight-bold"
                >
                  <b-form-select
                    v-model="form.programmingLanguage"
                    :options="languages"
                    class="w-100 form-select"
                  />
                </b-form-group>
              </form>

              <div class="text-center mt-2">
                <b-button variant="outline-primary" @click="changeStep(3)">
                  Next
                </b-button>
              </div>
            </template>

            <template v-if="currentStep == 3">
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
              <div v-if="codeOutput" class="bg-light text-dark mt-2 px-2">
                {{ codeOutput }}
              </div>

              <!-- {{ form.programmingLanguage }} -->
              <div class="d-md-flex my-2 justify-content-end text-primary">
                <b-button variant="outline-primary" @click="handleSubmit">
                  SUBMIT
                  <b-spinner variant="primary" small v-if="submitting" />&nbsp;
                  <b-icon-arrow-right-circle-fill v-if="!submitting" />
                </b-button>
              </div>
            </template>
          </b-form>
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
  email,
  maxLength,
} from "vuelidate/lib/validators";
import CodeEditor from "@/components/code-editor/CodeEditor.vue";
import { marked } from "marked";
import Steps from "@/components/stepper/Steps.vue";

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
        programmingLanguage: "",
        boilerplate: "",
        unitTest: "",
        exampleSolution: "",
      },
      languages: [
        { text: "Please select a programming language", value: null },
        { text: "Javascript", value: "javascript-node" },
        { text: "Python 3", value: "python3" },
        { text: "C", value: "c-gcc" },
        { text: "C++", value: "cpp-gcc" },
        { text: "Java 8", value: "java-jdk" },
        { text: "C#", value: "cs-mono" },
        { text: "Ruby", value: "ruby" },
        { text: "Kotlin", value: "kotlin" },
        { text: "Swift", value: "swift4" },
        { text: "Go", value: "go" },
      ],
      codeOutput: "",
      submitting: false,
      runningCode: false,
      previewMarkdown: false,
    };
  },
  computed: {
    markdownToHtml() {
      return marked(this.form.text);
    },
  },
  methods: {
    changeStep(step) {
      if (step == 2) {
        return this.isValidStepOne() ? (this.currentStep = 2) : "";
      } else if (step == 3) {
        return this.isValidStepTwo() ? (this.currentStep = 3) : "";
      } else {
        this.currentStep = 1;
      }
    },
    isValidStepOne() {
      this.$v.form.email.$touch();
      this.$v.form.nickname.$touch();
      return !this.$v.form.email.$error && !this.$v.form.nickname.$error;
    },
    isValidStepTwo() {
      this.$v.form.title.$touch();
      this.$v.form.text.$touch();

      return !this.$v.form.title.$error && !this.$v.form.text.$error;
    },
    async handleSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitting = true;
        const insertChallenge = firebase
          .functions()
          .httpsCallable("insertChallenge");
        const result = await insertChallenge(this.form);
        this.$router.push(`/challenge/${result.data}`);
        this.$v.$reset();
      }
    },
    async runTest() {
      this.runningCode = true;
      this.codeOutput = (
        await firebase.functions().httpsCallable("RunCode")({
          code: `${this.form.exampleSolution}
${this.form.unitTest}`,
          lang: this.form.programmingLanguage,
        })
      ).data;
      this.runningCode = false;
    },
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      email: {
        required,
        email,
      },
      nickname: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      text: {
        required,
        minLength: minLength(20),
      },
    },
  },
  components: {
    CodeEditor,
    Steps,
  },
};
</script>