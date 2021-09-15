<template>
  <div id="app">
    <Navbar />
    <Banner />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "Gotham Black";
  src: url(./fonts/gotham-black-webfont.woff2);
}

@font-face {
  font-family: "Gotham Bold";
  src: url(./fonts/gotham-bold.woff2);
}

@font-face {
  font-family: "Gotham Book";
  src: url(./fonts/gotham-book.woff2);
}

#app {
  font-family: "Gotham Book", sans-serif;
}

.nav-link {
  color: #e4e3e3 !important;
}
</style>
