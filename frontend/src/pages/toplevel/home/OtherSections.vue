<template>
  <b-container class="bg-dark text-light text-center my-md-5 my-3 pt-3">
    <h1 class="display-4 pb-4 border-primary border-top pt-4 border-2">Features</h1>

    <b-row class="justify-content-center">
      <b-col class="border border-primary py-2 mt-md-0 mt-3 mx-1">
        <div>
          <h3 class="pt-2">Code And Learn</h3>
          <p class="pt-2">
            We have thousands of challenges which you can attempt and enhance
            your coding skills
          </p>
        </div>
      </b-col>
      <b-col class="border border-primary py-2 mt-md-0 mt-3 mx-1" >
        <div> 
          <h3 class="pt-2">Make Friends!</h3>
          <p class="pt-2">
             Join our vast community on Telegram and make new Coder Friends ! 
          </p>
        </div>
      </b-col>
      <b-col class="border border-primary py-2 mt-md-0 mt-3 mx-1" >
        <div>
          <h3 class="pt-2">Contribute</h3>
          <p class="pt-2">
             Challenge others by creating custom challenges on our platform 
          </p>
        </div>
      </b-col>
    </b-row>
    <div class="border-primary border-top mt-4 border-2">
      <h1 class="display-4 pb-3 pb-md-5 mt-3 mt-md-5">ABOUT US</h1>
      <b-row>
        <b-col class="divider">
          <h2>The Team</h2>
          <h5 class="mx-auto subtitle">
            We are programmers just like you ! Helping and inspiring each other
            to improve themselves
          </h5>
          <b-link :to="{name:'core-team'}" class="btn btn-secondary mt-3">View Collaborators</b-link>
        </b-col>
        <b-col>
          <h2 class="mt-md-0 mt-3">The Project</h2>
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
.divider {
  border-right: 2px solid #c07095;
}
@media only screen and (max-width: 767.98px) {
  .divider {
    border-right: none;
  }
}
</style>
