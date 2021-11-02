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
      <p
        class="text-white"
        v-html="
          marked(
            comment.text ||
              'Comment text couldn\'t be displayed'
          )
        "
      ></p>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked';

export default {
  methods: {
    marked,
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
