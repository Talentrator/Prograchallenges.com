<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
</style>
