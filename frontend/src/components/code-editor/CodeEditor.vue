<template>
  <div>
    <AceEditor
      v-model="code"
      @init="editorInit"
      :lang="languageId"
      theme="github"
      width="100%"
      :height="editorHeight"
      :options="options"
    />
  </div>
</template>

<script>
/* eslint-disable global-require */
import AceEditor from 'vuejs-ace-editor';

export default {
  name: 'CodeEditor',
  components: {
    AceEditor,
  },
  data: () => ({
    code: '',
    options: {
      fontSize: 14,
      highlightActiveLine: true,
      showLineNumbers: true,
      tabSize: 4,
      showPrintMargin: false,
      showGutter: true,
    },
  }),
  props: {
    editorHeight: {
      type: String,
      default: '480px',
    },
    value: {
      type: String,
      required: true,
    },
    languageId: {
        type: String, 
        default: 'javascript',
    }, 
    canEdit: {
        type: Boolean, 
        default: true,
    }
  },
  created() {
    this.code = this.value;
    this.options = {
        ...this.options,
        readOnly: !this.canEdit,
    }
  },
  watch: {
    code(oldCode, newCode) {
      if (oldCode !== newCode) this.$emit('input', this.code);
    },
  },
  methods: {
    editorInit() {
      require('brace/ext/language_tools');
      require('brace/mode/python');
      require('brace/mode/javascript');
      require('brace/mode/ruby');
      require('brace/mode/c_cpp');
      require('brace/mode/java');
      require('brace/mode/csharp');
      require('brace/mode/ruby');
      require('brace/mode/kotlin');
      require('brace/mode/swift');
      require('brace/mode/golang');
      require('brace/theme/github');
    },
  },
};
</script>
