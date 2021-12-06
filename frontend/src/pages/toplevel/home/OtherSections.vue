<template>
  <b-container class="mb-md-5 mb-3 pt-3 mt-4">
    <h1 class="border-primary border-top py-4 border-2">
      Enjoy your stay here...
    </h1>

    <b-row class="max-width">
      <b-col cols="12" md="4">
        <div class="px-2 my-1 py-2 border border-primary h-100">
          <h3 class="mt-2">🉐 Code And Learn</h3>
          <p class="">
            We have thousands of challenges which you can attempt and enhance
            your coding skills
          </p>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="px-2 my-1 py-2 border border-primary h-100">
          <h3 class="mt-2">🤗 Make Friends!</h3>
          <p class="">
            Join our vast community on Telegram and make new Coder Friends !
          </p>
        </div>
      </b-col>
      <b-col cols="12" md="4">
        <div class="px-2 my-1 py-2 border border-primary h-100">
          <h3 class="mt-2">👷‍♂️ Create</h3>
          <p class="">
            Challenge others by creating custom challenges on our platform
          </p>
        </div>
      </b-col>
    </b-row>
    <div class="border-primary border-top mt-4 border-2 pb-3 pb-sm-0">
      <h1 class="py-4">ABOUT US</h1>
      <b-row class="max-width mx-auto">
        <b-col cols="12" md="6" class="px-0 py-md-3 py-1 justify-content-between bg-dark">
          <h2>The Team</h2>
          <p>
            We are programmers just like you ! Helping and inspiring each other
            to improve themselves
          </p>

          <b-link :to="{ name: 'core-team' }" class="mt-3 text-primary">
            View Collaborators <b-icon-arrow-right-circle-fill class="ml-1" />
          </b-link>
        </b-col>
        <b-col cols="12" md="6" class="px-0 px-md-3 py-md-3 py-1 bg-dark">
          <h2>The Project</h2>
          <p>
            We are all about Programming Challenges, This platform helps
            programmers enhance their skills, challenge others, make friends
          </p>
          <b-link :to="{ name: 'challenges' }" class="mt-2 text-primary">
            Explore Challenges <b-icon-arrow-right-circle-fill class="ml-1" />
          </b-link>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "OtherSections",
};
</script>
<style scoped>
.subtitle {
  font-family: "Gotham Book", sans-serif;
  text-transform: none;
  max-width: 20rem;
}
.flexbox {
  background: #c07095;
  gap: 2px;
}
</style>
<style>
.max-width {
  max-width: 80rem !important;
}
</style>
