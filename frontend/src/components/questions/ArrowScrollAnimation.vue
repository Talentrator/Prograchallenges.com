<template>
  <div :class="`scroll ${direction}`" :style="style">
    <div class="scroll-arrow"></div>
    <div class="scroll-arrow"></div>
    <div class="scroll-arrow"></div>
  </div>
</template>

<script>
export default {
  name: "ArrowScrollAnimation",
  props: {
    direction: {
      type: String,
      default: "down",
    },
    color: {
      type:String,
      default: "#000"
    }
  },
  computed: {
    style(){
      return {'--color':this.color}
    }
  },
};
</script>

<style lang="scss" scoped>

$animation-delay: 0.1s;
$arrow-size: 12px;
$arrow-border-color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;

.up {
  transform: rotate(-180deg);
}

.left {
  transform: rotate(90deg);
}
.right {
  transform: rotate(-90deg);
}

.scroll-arrow {
  width: $arrow-size;
  height: $arrow-size;
  transform: rotate(45deg);
  border-right: 2px solid $arrow-border-color;
  border-bottom: 2px solid $arrow-border-color;
  animation: arrow-wave 1s infinite;
  animation-direction: alternate;
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation-delay: $animation-delay * $i;
    }
  }
}

@keyframes arrow-wave {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>