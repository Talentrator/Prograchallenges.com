<template>
  <div class="bg-dark text-light pt-4">
    <b-container>
      <b-row>
        <b-col>
          <b-link class="d-block text-light">Home</b-link>
          <b-link class="d-block text-light">How It Works</b-link>
          <b-link class="d-block text-light">Challenges</b-link>
          <b-link class="d-block text-light">Support</b-link>
        </b-col>

        <b-col>
          <!--Email Logo-->
          <b-link class="d-block text-light">prograchallenges@gmail.com</b-link>
          <!--Telegram Logo-->
          <b-link class="d-block text-light">Programming Challenges</b-link>
          <!--Reddit Logo-->
          <b-link class="d-block text-light">r/prograchallenges</b-link>
        </b-col>
        <b-col>
          <!-- something about our webpack config seems broken? -->
          <b-img :src="require('../assets/temporary-logo.svg')"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#Title {
  font-family: "Gotham Bold", sans-serif;
  font-size: xx-large;
  margin-bottom: 1rem;
}
</style>
