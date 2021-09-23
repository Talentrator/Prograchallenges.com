<template>
  <div class="bg-dark my-5">
    <b-container class="text-light">
        <h1 class="pb-2 display-4 text-center">Challenges</h1>
      <p class="text-justify">
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
      
        <b-row class="justify-content-md-between flex-md-row align-items-center flex-column">
          <b-col><b-button variant="primary" block class="mt-2">RANDOM</b-button></b-col>
          <b-col class="mt-3 text-center">or</b-col>
          <b-col>
            <b-dropdown text="Language" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>

      <ChallengesTable :pagination="pagination" :challenges="challenges" />
    </b-container>
  </div>
</template>

<script>
import ChallengesTable from '../../components/ChallengesTable.vue';

export default {
  name: "Challenges",
  components: {
    ChallengesTable
  },
  data() {
    return {
      challenges: [
        { ID:1 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:2 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:3 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:4 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:5 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:6 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:7 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:8 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:9 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:10 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:11 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:12, Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:13 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:14 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:15 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:16 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:17 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:18 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:19 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:20 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:21 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:22 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:23 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:24 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
        { ID:25 , Problem: "Example", Languages: "Example" ,Difficulty:"Medium"},
      ],
      pagination:true
    }
  },
};
</script>

<style>
.dropdown-toggle{
    color:#dbb880 !important;
    background: transparent !important;
    border: none;
    border-bottom: 1px solid #dbb880 !important;
}
.col {
    width: min-content;
}
</style>