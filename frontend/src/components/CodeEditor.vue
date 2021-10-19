<template>
  <div
    class="shadow border"
    :header="question.title"
    header-class="font-weight-bold"
  >
    <b-row>
      <b-col cols="12" class="pb-2">
        <b-tabs justified pills active-nav-item-class="bg-secondary" v-model="activeTab">
          <b-tab title="Instructions">
            <div class="mt-2 mx-2">
              <b> {{ question.title }} </b> <br />
              <span style="white-space: pre-wrap">{{ question.description }}</span>
            </div>
          </b-tab>
          <b-tab
            title="Output"
            style="background: var(--dark)"
          >
            <div class="mt-2 mx-2 px-2 py-2 text-light">
              <div v-if="compiling"><b>Status: </b>Sending request...</div>
              <div v-else-if="result">
                <span>
                  <b>Result</b><br />
                  {{ result.filter((k) => k).length }} out of
                  {{ result.length }} tests passed
                </span>
                <br />
                <div v-for="(bool, i) in result" :key="i">
                  <div v-if="bool" class="text-primary">
                    <b-icon-check-circle-fill /> Test passed
                  </div>
                  <div v-else class="text-danger">
                    <b-icon-exclamation-circle-fill /> Test failed
                  </div>
                </div>
              </div>
              <div v-else-if="!allowRunning"> Code-Execution was disabled for this editor</div>
              <div v-else>Your results will be shown here.</div>
            </div>
          </b-tab>
        </b-tabs>
      </b-col>
      <b-col cols="12">
        <AceEditor
          v-model="code"
          @init="editorInit"
          :lang="getLanguageId()"
          theme="github"
          width="100%"
          :height="editorHeight"
          :options="options"
        />
        <b-button block @click="submit()" small :disabled="compiling || !allowRunning">
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
/* eslint-disable global-require */

import firebase from 'firebase/app';
import 'firebase/functions';
import { mapState } from 'vuex';

import AceEditor from 'vuejs-ace-editor';

export default {
  name: 'CodeEditor',
  components: {
    AceEditor,
  },
  data: () => ({
    code: '',
    activeTab: 0,
    result: '',
    compiling: false,
    options: {
      fontSize: 14,
      highlightActiveLine: true,
      showLineNumbers: true,
      tabSize: 4,
      showPrintMargin: false,
      showGutter: true,
    },
  }),
  computed: {
    ...mapState(['userObject']),
  },
  props: {
    allowRunning: {
      type: Boolean,
      required: false,
      default: true,
    },
    editorHeight: {
      type: String,
      default: '480px',
    },
    value: {
      type: String,
      required: true,
    },
    question: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.code = this.value;
  },
  watch: {
    code(oldCode, newCode) {
      if (oldCode !== newCode) this.$emit('input', this.code);
    },
  },
  methods: {
    async submit() {
      this.activeTab = 1;
      this.compiling = true;
      const testId = this.userObject.observing.find(
        (obs) => obs.submittedTo !== true,
      ).uid;
      const response = await firebase.functions().httpsCallable('RunCode')({
        testId,
        code: this.code,
        lang: this.question.lang,
      });
      this.result = response.data;
      this.compiling = false;
    },
    getLanguageId() {
      const mapping = {
        "python3": "python",
        "javascript-node": "javascript",
      };
      return mapping[this.question.lang];
    },
    editorInit() {
      require('brace/ext/language_tools');
      require('brace/mode/python');
      require('brace/mode/javascript');
      require('brace/theme/github');
    },
  },
};
</script>
