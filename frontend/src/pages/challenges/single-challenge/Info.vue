<template>
  <div>
    <h1 class="m-0 text-white">{{ challengeData.title }}</h1>
    <p class="text-muted m-0">{{ challengeData.nickname }}</p>
    <p class="my-3 text-white" v-html="challengeData.text"></p>
  </div>
</template>

<script>
export default {
  props: {
    challengeData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
