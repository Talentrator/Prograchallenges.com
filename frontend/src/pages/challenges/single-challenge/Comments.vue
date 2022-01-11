<template>
  <div class="mb-5">
    <div
      v-for="comment in comments"
      :key="comment.id"
      class="mt-3 my-2 border-secondary"
      :class="{
        'border-bottom': comments.indexOf(comment) + 1 !== comments.length,
      }"
    >
     <div class="d-flex justify-content-between">
        <p class="text-muted m-0">{{ comment.nickname }}</p>
        <voting />
     </div>

      <div
        v-for="(description, idx) in categorizeCodeSnippetsAndText(
          comment.text
        )"
        :key="`questionnaire-description-${idx}`"
      >
        <span v-if="description.type === 'code'">
          <CodeEditor
            v-model="description.phrase"
            :languageId="langToEditor[description.lang] || 'javascript'"
            :canEdit="false"
            class="d-block"
            editorHeight="100px"
        /></span>
        <span v-else v-html="marked(description.phrase)" />
      </div>
    </div>
  </div>
</template>

<script>
import { marked } from "marked";
import CodeEditor from "@/components/code-editor/CodeEditor.vue";
import { categorizeCodeSnippetsAndText } from "@/pages/challenges/helpers/helpers.js";
import Voting from '../../../components/Voting.vue';

export default {
  components: {
    CodeEditor,
    Voting,
  },
  data() {
    return {
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
        rust: "rust",
        scala: "scala",
      },
    };
  },
  methods: {
    marked,
    categorizeCodeSnippetsAndText,
  },
  props: {
    comments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
