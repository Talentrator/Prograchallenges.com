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
      <p class="text-muted m-0">{{ comment.nickname }}</p>

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

export default {
  components: {
    CodeEditor,
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
    categorizeCodeSnippetsAndText(text) {
      const phrases = [];
      let currentPhrase = "";
      let backtickCount = 0;
      let isIteratingThroughCode = false;
      const occurences = (text.match(/```/g) || []).length;
      if (occurences === 0 || occurences % 2)
        phrases.push({ phrase: text, type: "text" });
      else {
        text.split("").forEach((currentCharacter) => {
          if (currentCharacter === "`") {
            backtickCount += 1;
            if (backtickCount === 3) {
              backtickCount = 0;
              phrases.push({
                phrase: isIteratingThroughCode
                  ? currentPhrase.substr(currentPhrase.indexOf("\n")).trim()
                  : currentPhrase,
                type: isIteratingThroughCode ? "code" : "text",
                lang: isIteratingThroughCode
                  ? currentPhrase.substr(0, currentPhrase.indexOf("\n")).trim()
                  : null,
              });
              currentPhrase = "";
              isIteratingThroughCode = !isIteratingThroughCode;
            }
          } else {
            currentPhrase += currentCharacter;
          }
        });
      }
      if (currentPhrase.length)
        phrases.push({ phrase: currentPhrase, type: "text" });
      return phrases;
    },
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
