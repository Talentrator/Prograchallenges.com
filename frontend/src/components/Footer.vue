<template>
  <div class="bg-dark text-light p-4 custom-border">
    <b-container fluid>
      <div class="d-flex w-100 justify-content-around flex-md-row flex-column">
        <div class="my-2 my-md-0">
          <h2>Navigation</h2>
          <b-link class="d-block text-light" :to="{ name: 'tld-home' }">
            Home
          </b-link>
          <b-link class="d-block text-light" :to="{ name:'usr-coming-soon' }">How It Works</b-link>
          <b-link class="d-block text-light" :to="{ name:'challenges' }">Challenges</b-link>
          <b-link class="d-block text-light" :to="{ name:'usr-coming-soon' }">Support</b-link>
        </div>
        <div class="my-2 my-md-0 mb-4">
          <h2>Contact Us</h2>
          <div class="d-flex align-items-center">
            <b-icon-envelope />&nbsp;
            <a href="mailto:prograchallenges@gmail.com" target="_blank" class="d-block text-light">prograchallenges@gmail.com</a>
          </div>
          <div class="d-flex align-items-center">
            <img src='@/assets/telegram-logo.svg' alt='Prograchallenges | Telegram' />&nbsp;
            <a href="https://t.me/prograchallenges" target="_blank" class="d-block text-light">Programming Challenges</a>
          </div>
          <div class="d-flex align-items-center">
            <img src='@/assets/reddit-logo.svg' alt='Prograchallenges | Reddit' />&nbsp;
            <a href="https://www.reddit.com/r/prograchallenges/" target="_blank" class="d-block text-light">r/prograchallenges</a>
          </div>
        </div>
        <div>
          <!-- something about our webpack config seems broken? -->
          <b-img :src="require('../assets/temporary-logo.svg')"></b-img>
        </div>
      </div>
    </b-container>
  </div>
</template>


<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.custom-border{
  border-top: 2px solid #c07095;
}
</style>
