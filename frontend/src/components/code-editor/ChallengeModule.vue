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
              <span style="white-space: pre-wrap" v-html="challenge.text" />
            </div>
          </b-tab>
          <b-tab title="Output" style="background: var(--dark)">
            <div class="mt-2 mx-2 px-2 py-2 text-light">
              <div v-if="compiling"><b>Status: </b>Sending request...</div>
              <div v-else-if="result">
                <span style="white-space: pre-wrap;">
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
  }),
  computed: {
    ...mapState(["userObject"]),
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
    this.code = this.value;
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
      
      const response = await firebase.functions().httpsCallable("EvaluateChallenge")({
        challengeId: this.$route.params.id,
        code: this.code,
        lang: this.challenge.programmingLanguage,
      });

      this.result = response.data;
      this.compiling = false;
    },
    getLanguageId() {
      const mapping = {
        python3: "python",
        "javascript-node": "javascript",
      };
      return mapping[this.challenge.programmingLanguage];
    },
  },
};
</script>