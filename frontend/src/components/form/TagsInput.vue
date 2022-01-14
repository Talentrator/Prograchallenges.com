<template>
  <div>
    <slot>
      <label for="tags-basic" class="form-label"
        >Challenge Tags (press enter to add)</label
      >
    </slot>
    <b-form-tags
      placeholder="Input tags here eg. javascript, longest-word"
      input-id="tags-basic"
      v-model="valueLocal"
      tag-variant="primary"
      :separator="separator"
    ></b-form-tags>
  </div>
</template>
<script>
export default {
  name: "TagsInput",
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    separator: {
      type: String,
      default: " ",
    },
  },
  model: {
    prop: "value",
    event: "valuechange",
  },
  computed: {
    valueLocal: {
      get: function () {
        return this.value;
      },
      set: function (value) {
        this.$emit("valuechange", value);
      },
    },
  },
};
</script>

<style lang="scss">
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
.badge-primary {
  @extend .bg-primary;
}
button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
}
.close {
  float: right;
  line-height: 1;
  color: $black;
  text-shadow: 0 1px 0 $white;
  opacity: 0.5;
}
</style>