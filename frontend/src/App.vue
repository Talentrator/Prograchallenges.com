<template>
  <div id="app" class="bg-dark d-flex flex-column">
    <Navbar class="mt-0" />
    <router-view style="flex-grow:1; display:grid; place-items: center" />
    <Footer class="mb-0" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from "./components/Navbar.vue";

export default {
  watch: {
    $route(to) {
      document.title = to.meta.title || "Talentrator";
      this.showFooter = !to.meta.hideFooter;
      this.startShowingFooter = true;
    },
  },

  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

