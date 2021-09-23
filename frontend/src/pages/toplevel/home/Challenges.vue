<template>
  <div class="bg-dark my-5">
    <b-container class="text-light">
      <div class="text-center">
        <h1 class="pb-2 display-4">C h a l l e n g e s</h1>
      </div>
      <h2 class="mt-4" style="">Browse...</h2>
      <p>
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
      
        <b-row>
          <b-col><b-button variant="primary" block class="mt-2">RANDOM</b-button></b-col>
          <b-col class="mt-3">or</b-col>
          <b-col>
            <b-dropdown id="dropdown-1" text="Language" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col>
            <b-dropdown id="dropdown-1" text="Difficulty" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col>
            <b-dropdown id="dropdown-1" text="Sort By" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
        
        <div class="text-center">
          <b-table :current-page="currentPage" :items="challenges" :per-page="perpage" class="text-light mt-4"></b-table>
          <b-pagination :total-rows="challenges.length" :per-page="perpage" v-model="currentPage" v-if="pagination"></b-pagination>
        </div>

      
    </b-container>
  </div>
</template>

<script>

export default {
  name: "Challenges",
  props:{
    challenges:{
      type:Array
    },
    pagination:{type:Boolean}
  },
  data() {
    return {
      perpage:20,
      currentPage: 1,
    };
  },
};
</script>


