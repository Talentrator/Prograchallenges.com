<template>
  <div class="bg-dark text-light p-4 border-top border-primary">
    <b-container fluid>
      <div class="d-flex w-100 justify-content-around flex-md-row flex-column">
        <div class="my-2 my-md-0">
          <h2>Navigation</h2>
          <b-link class="d-block text-light" :to="{ name: 'tld-home' }">
            Home
          </b-link>
          <b-link class="d-block text-light" :to="{ name: 'challenges' }"
            >Challenges</b-link
          >
          <b-link class="d-block text-light" :to="{ name: 'usr-coming-soon' }"
            >Support</b-link
          >
          <b-link class="d-block text-light" :to="{ name: 'core-team' }"
            >Contributors</b-link
          >

          <a href="https://github.com/Talentrator/Prograchallenges.com#readme">Contribute</a>
        </div>
        <div class="my-2 my-md-0 mb-4">
          <h2>Contact Us</h2>
          <div class="d-flex align-items-center">
            <b-icon-envelope />&nbsp;
            <a
              href="mailto:prograchallenges@gmail.com"
              target="_blank"
              class="d-block text-light"
              >support@talentrator.com</a
            >
          </div>
          <div class="d-flex align-items-center">
            <img
              src="@/assets/logos/telegram-logo.svg"
              alt="Prograchallenges | Telegram"
            />&nbsp;
            <a
              href="https://telegram.me/prograchallenges"
              target="_blank"
              class="d-block text-light"
              >Programming Challenges</a
            >
          </div>
          <div class="d-flex align-items-center">
            <img
              src="@/assets/logos/reddit-logo.svg"
              alt="Prograchallenges | Reddit"
            />&nbsp;
            <a
              href="https://www.reddit.com/r/prograchallenges/"
              target="_blank"
              class="d-block text-light"
              >r/prograchallenges</a
            >
          </div>
          <a href="https://www.talentrator.com">Get a Job</a>
        </div>
        <div>
          <!-- something about our webpack config seems broken? -->
          <b-img
            :src="require('../assets/logos/logo.svg')"
            style="max-width: 10.5em"
          ></b-img>
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
