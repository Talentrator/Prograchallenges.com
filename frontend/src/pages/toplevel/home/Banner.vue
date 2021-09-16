<template>
  <div class="bannerDiv">
      <b-container class="pc-medium-container text-center py-5">
        <img class="responsive-image" src="@/assets/logo.jpeg" alt="Responsive Image" >
        <h2>I challlenge you to challlenge your friends!</h2>
      </b-container>
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
  padding-top:0.25rem;
  padding-bottom: 0.5rem;
  color: white;
}
.responsive-image{
    width: 100%;
    max-width: 400px;
    height: auto;
}
</style>
