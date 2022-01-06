<template>
  <div
    class="shadow border"
    :header="challenge.title"
    header-class="font-weight-bold"
  >
    <b-row>
      <b-col cols="12" class="pb-2">
        <b-tabs
          justified
          pills
          active-nav-item-class="bg-secondary"
          v-model="activeTab"
        >
          <b-tab title="Instructions">
            <div class="mt-2 mx-2">
              <b> {{ challenge.title }} </b> <br />
              <span v-html="compiledMarkdown" />
            </div>
          </b-tab>
          <b-tab title="Output" style="background: var(--dark)">
            <div class="mt-2 mx-2 px-2 py-2 text-light">
              <div v-if="compiling"><b>Status: </b>Sending request...</div>
              <div v-else-if="result">
                <div class="" v-if="!erronoeusResult">
                  <div class="text-secondary d-flex align-items-center">
                    <b-icon-check2-circle class="text-secondary fs-2" />
                    <span class="ui-icon-label tab-item-label ps-1"> {{passedTestsFormattedText}} </span>
                  </div>
                  <div class="mt-2 text-primary d-flex align-items-center" v-if="failed > 0">
                    <b-icon-x class="text-primary fs-2" />
                    <span class="ui-icon-label tab-item-label ps-1"> {{failed}} test{{ passed > 1 ? 's' : '' }} failed </span>
                  </div>
                </div>
                <span style="white-space: pre-wrap;" v-else>
                  {{ result }}
                </span>
              </div>
              <div v-else-if="!allowRunning">
                Code-Execution was disabled for this editor
              </div>
              <div v-else>Your results will be shown here.</div>
            </div>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col cols="12">
        <CodeEditor
          v-model="code"
          :languageId="getLanguageId()"
          :editorHeight="editorHeight"
        />
        <b-button
          block
          @click="submit()"
          small
          :disabled="compiling || !allowRunning"
        >
          <span v-if="compiling">
            <b-spinner />
          </span>
          <b-icon-caret-right-fill v-else />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import { mapState } from "vuex";

import { marked } from 'marked';

import CodeEditor from "./CodeEditor.vue";

export default {
  name: "ChallengeModule",
  components: {
    CodeEditor,
  },
  data: () => ({
    code: "",
    activeTab: 0,
    result: "",
    compiling: false,
    passed: 0,
    failed: 0,
  }),
  computed: {
    ...mapState(["userObject"]),
    compiledMarkdown() {
      return marked(this.challenge.text);
    },
    passedTestsFormattedText(){
      const count = (this.failed == 0 && this.passed > 0) ? 'All': this.passed;
      return `${count} test${ this.passed > 1 ? 's' : '' } passed`;
    },
    erronoeusResult(){
      return !(this.result.indexOf('true') >= 0 || this.result.indexOf('false') >= 0);
    }
  },
  props: {
    allowRunning: {
      type: Boolean,
      required: false,
      default: true,
    },
    editorHeight: {
      type: String,
      default: "480px",
    },
    value: {
      type: String,
      required: true,
    },
    challenge: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.code = this.challenge.boilerplate;
  },
  watch: {
    code(oldCode, newCode) {
      if (oldCode !== newCode) this.$emit("input", this.code);
    },
  },
  methods: {
    async submit() {
      this.activeTab = 1;
      this.compiling = true;
      this.failed = this.passed = 0;

      const response = await firebase.functions().httpsCallable("EvaluateChallenge")({
        challengeId: this.$route.params.id,
        code: this.code,
        lang: this.challenge.programmingLanguage,
      });

      this.result = response.data;
      this.compiling = false;
      this.parseResult();
    },
    getLanguageId() {
      const mapping = {
        python3: "python",
        "javascript-node": "javascript",
      };
      return mapping[this.challenge.programmingLanguage];
    },
    parseResult(){
      if (!this.erronoeusResult) {
        this.result.split(/\s+/).map((res) => res === 'true' ? this.passed++ : this.failed++);
      }
    }
  },
};
</script>
