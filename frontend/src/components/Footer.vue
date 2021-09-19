<template>
  <div class="bg-dark text-light p-4">
    <b-container fluid>
      <div class="d-flex w-100 justify-content-around flex-md-row flex-column">
        <div class="my-2 my-md-0">
          <b-link class="d-block text-light" :to="{ name: 'tld-home' }">
            Home
          </b-link>
          <b-link class="d-block text-light">How It Works</b-link>
          <b-link class="d-block text-light">Challenges</b-link>
          <b-link class="d-block text-light">Support</b-link>
        </div>
        <div class="my-2 my-md-0 mb-4">
          <div class="d-flex align-items-center">
            <b-icon-envelope />&nbsp;
            <b-link class="d-block text-light">prograchallenges@gmail.com</b-link>
          </div>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
            </svg>&nbsp;
            <b-link class="d-block text-light">Programming Challenges</b-link>
          </div>
          <div class="d-flex align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16">
              <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/>
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/>
            </svg>&nbsp;
            <b-link class="d-block text-light">r/prograchallenges</b-link>
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
#Title {
  font-family: "Gotham Bold", sans-serif;
  font-size: xx-large;
  margin-bottom: 1rem;
}
</style>
