<template>
  <div class="bg-dark text-light pt-4">
    <b-container>
      <ul>
        <li><a href="#" id="Content1" class="text-light">Home</a></li>
        <li><a href="#" id="Content1" class="text-light">How It Works</a></li>
        <li><a href="#" id="Content1" class="text-light">Challenges</a></li>
        <li><a href="#" id="Content1" class="text-light">Support</a></li>
      </ul>
      <ul>
        <!--Email Logo-->
        <li id="Content">prograchallenges@gmail.com</li>
        <!--Telegram Logo-->
        <li id="Content">Programming Challenges</li>
        <!--Reddit Logo-->
        <li id="Content">r/prograchallenges</li>
      </ul>
      <img src="@/assets/temporary-logo.svg" />
    </b-container>
  </div>
</template>


<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#Content1 {
  text-decoration: none;
}
#Title {
  font-family: "Gotham Bold", sans-serif;
  font-size: xx-large;
  margin-bottom: 1rem;
}
</style>
