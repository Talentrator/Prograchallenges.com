<template>
  <div class="bannerDiv">
    <center>
      <img
        class="banner-img"
        src="../assets/logo.jpeg"
        alt="Responsive image"
      />
      <h3>I challenge you to challenge your friends!</h3>
    </center>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.bannerDiv {
  background-color: black;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
  color: white;
}
.banner-img {
  width: 40%;
}
@media (max-width: 768px) {
  .banner-img {
    width: 100%;
  }
}
</style>
