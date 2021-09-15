<template>
  <div class="home">
    <Banner />
    <DummySection />
  </div>
</template>

<script>
import Banner from "./home/Banner.vue";
import DummySection from "./home/DummySection.vue";

export default {
  name: "Home",
  components: {
    Banner,
    DummySection,
  },
};
</script>
