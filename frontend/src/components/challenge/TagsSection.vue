<template>
  <div>
    <span class="">
      <router-link
        v-for="(tag, index) in tags"
        :key="tag"
        to="#"
        :class="['hashtag', 'text-secondary', {'ps-1': index !== 0}]"
        >{{ formatTag(tag) }}</router-link
      >
    </span>
  </div>
</template>

<script>
export default {
  name: "TagsSection",
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tagPrefix: "#",
    };
  },
  methods: {
    formatTag(tag) {
      return tag.startsWith(this.tagPrefix) ? tag : this.tagPrefix + tag;
    },
  },
};
</script>
