<template>
  <div class="bg-dark my-5">
    <b-container class="text-light">
      <center>
        <h1 class="pb-2" style="font-size: 3.5rem">C h a l l e n g e s</h1>
      </center>
      <h2 class="mt-4" style="">Browse...</h2>
      <p style="letter-spacing: 1.4px">
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
      <div>
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
      </div>

      <div>
        <center>
          <b-table  :items="items" class="text-light mt-4"></b-table>
        </center>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Challenges",

  data() {
    return {
      items: [
        { ID:1 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:2 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:3 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:4 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:5 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
      ],
    };
  },
};
</script>


