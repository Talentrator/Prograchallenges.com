<template>
  <b-container class="bg-dark text-light text-center my-5 pt-3">
    <h1 class="display-4 pb-4">Features</h1>

    <b-row>

      <b-col>
        <b-card
          title="Code </> & Learn"
          tag="article"
          style="max-width: 20rem"
          class="mb-2 bg-dark"
          border-variant="primary"
        >
          <b-card-text class="pt-2">We have thousands of challenges which you can attempt and enhance your coding skills</b-card-text>
        </b-card>
      </b-col>

      <b-col>
        <b-card
          title="Make Friends !"
          tag="article"
          style="max-width: 20rem"
          class="mb-2 bg-dark"
          border-variant="primary"
        >
          <b-card-text> Join our vast community on Telegram and make new Coder Friends ! </b-card-text>
        </b-card>
      </b-col>

      <b-col>
        <b-card
          title="Create"
          tag="article"
          style="max-width: 20rem"
          class="mb-2 bg-dark"
          border-variant="primary"
        >
          <b-card-text>Challenge others by creating custom challenges on our platform</b-card-text>
        </b-card>
      </b-col>

    </b-row>
    <div class="border-primary border-top mt-5 border-2">
        <h1 class="display-4 pb-4 pt-5">ABOUT US</h1>
        <b-row>
            
            <b-col class="divider">
                <h2>The Team</h2>
                <h5 class="mx-auto subtitle">We are programmers just like you ! Helping and inspiring each other to improve themselves </h5>
                <a href="#" class="btn btn-secondary mt-3">View Collaborators</a>
            </b-col>
            <b-col>
                <h2>The Project</h2>
                <h5 class="mx-auto subtitle">We are all about Programming Challenges, This platform helps programmers enhance their skills, challenge others, make friends</h5>
                <a href="#" class="btn btn-secondary mt-2">Explore Challenges</a>
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
.subtitle{
    font-family:'Gotham Book',sans-serif;
    text-transform: none;
    max-width:20rem;
}
.divider{
  border-right:2px solid #c07095;
}
@media only screen and (max-width: 600px) {
  .divider{
    border-right: none;
  }
}
</style>
