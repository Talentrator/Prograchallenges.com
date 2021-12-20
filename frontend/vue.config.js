module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "@/assets/scss/partials/_variables.scss";`
        }
      }
    }
  };