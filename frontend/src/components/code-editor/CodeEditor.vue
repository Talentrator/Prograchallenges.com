<template>
  <div>
    <AceEditor
      v-model="code"
      @init="editorInit"
      :lang="langToEditor[lang]"
      theme="textmate"
      width="100%"
      :height="editorHeight"
      :options="options"
    />
  </div>
</template>

<script>
/* eslint-disable global-require */
import AceEditor from "vuejs-ace-editor";

export default {
  name: "CodeEditor",
  components: {
    AceEditor,
  },
  data: () => ({
    code: "",
    options: {
      fontSize: 14,
      highlightActiveLine: true,
      showLineNumbers: true,
      tabSize: 4,
      showPrintMargin: false,
      showGutter: true,
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
    },
    langToEditor: {
      // language names to editor mappings because ACE uses other names
      "javascript-node": "javascript",
      python3: "python",
      "c-gcc": "c_cpp",
      "cpp-gcc": "c_cpp",
      "java-jdk": "java",
      cs_mono: "csharp",
      ruby: "ruby",
      kotlin: "kotlin",
      swift4: "swift",
      go: "golang",
    },
  }),
  props: {
    editorHeight: {
      type: String,
      default: "480px",
    },
    value: {
      type: String,
      required: true,
    },
    languageId: { // use TIO-language-id's. Automatically converts to ACE-language-id's
      type: String,
      default: "javascript",
    },
    lang: {
      type: String,
      default: "javascript-node",
    },
    canEdit: {
      type: Boolean,
      default: true,
    },
  },
  created() {
    this.code = this.value;
    this.options = {
      ...this.options,
      readOnly: !this.canEdit,
    };
  },
  watch: {
    code(oldCode, newCode) {
      if (oldCode !== newCode) this.$emit("input", this.code);
    },
  },
  methods: {
    editorInit() {
      require("brace/ext/language_tools");
      require("brace/mode/python");
      require("brace/mode/javascript");
      require("brace/mode/ruby");
      require("brace/mode/c_cpp");
      require("brace/mode/java");
      require("brace/mode/csharp");
      require("brace/mode/ruby");
      require("brace/mode/kotlin");
      require("brace/mode/swift");
      require("brace/mode/golang");
      require("brace/theme/textmate");
    },
  },
};
</script>
