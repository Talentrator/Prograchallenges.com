<template>
  <div>
    <div
      class="gig-cursor-pointer border p-2"
      @click="toggle()"
      :style="
        bordered ? 'border-right: 10px solid var(--primary) !important' : ''
      "
    >
      <b-row class="align-items-center">
        <b-col cols="10">
          <slot name="preview" />
        </b-col>
        <b-col cols="2" v-if="showStateIcons" class="text-right">
          <b-icon
            :icon="stateIconOpen"
            v-if="open"
            :font-scale="stateIconSize"
          />
          <b-icon :icon="stateIconClosed" v-else :font-scale="stateIconSize" />
        </b-col>
      </b-row>
    </div>

    <transition name="slide">
      <div class="px-2 my-2 border-left" v-if="open">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    stateIconOpen: {
      type: String,
      default: 'dash',
    },
    stateIconClosed: {
      type: String,
      default: 'plus',
    },
    showStateIcons: {
      type: Boolean,
      default: true,
    },
    stateIconSize: {
      type: Number,
      default: 2,
    },
    bordered: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    open: false,
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>