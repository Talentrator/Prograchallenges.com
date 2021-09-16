<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
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
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Gotham Book", sans-serif;
}

.nav-link {
  color: #e4e3e3 !important;
}
</style>
