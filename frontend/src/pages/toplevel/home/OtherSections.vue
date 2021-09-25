<template>
  <b-container class="bg-dark text-light text-center mb-md-5 mb-3 pt-3 mt-4">
    <h1 class="display-4 border-primary border-top py-4 border-2">Features</h1>

    <b-row class="max-width flex-column flex-sm-row px-4 mx-auto" style="gap: .7rem;">
      <b-col class="py-2 border border-primary d-flex flex-column justify-content-center">
        <div>
          <h3 class="mt-2">Code And Learn</h3>
          <p class="">
            We have thousands of challenges which you can attempt and enhance
            your coding skills
          </p>
        </div>
      </b-col>
      <b-col class="py-2 border border-primary d-flex flex-column justify-content-center">
        <div> 
          <h3 class="mt-2">Make Friends!</h3>
          <p class="">
             Join our vast community on Telegram and make new Coder Friends ! 
          </p>
        </div>
      </b-col>
      <b-col class="py-2 border border-primary d-flex flex-column justify-content-center">
        <div>
          <h3 class="mt-2">Contribute</h3>
          <p class="">
             Challenge others by creating custom challenges on our platform 
          </p>
        </div>
      </b-col>
    </b-row>
    <div class="border-primary border-top mt-4 border-2 pb-3 pb-sm-0">
      <h1 class="display-4 py-4">ABOUT US</h1>
      <b-row class="max-width flexbox d-flex flex-column flex-sm-row mx-auto w-100">
        <b-col class="px-3 py-3 d-flex flex-column justify-content-between bg-dark">
          <h2>The Team</h2>
          <h5 class="mx-auto subtitle">
            We are programmers just like you ! Helping and inspiring each other
            to improve themselves
          </h5>
          <b-link :to="{name:'core-team'}" class="btn btn-secondary mt-3">View Collaborators</b-link>
        </b-col>
        <b-col class="px-3 py-3 d-flex flex-column justify-content-between bg-dark">
          <h2>The Project</h2>
          <h5 class="mx-auto subtitle">
            We are all about Programming Challenges, This platform helps
            programmers enhance their skills, challenge others, make friends
          </h5>
          <b-link :to="{name:'challenges'}" class="btn btn-secondary mt-2">Explore Challenges</b-link>
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
 .max-width{
   max-width: 65rem;
 }
 </style>