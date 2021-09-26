<template>
  <b-container class="text-light">
    <div class="text-center text-light">
      <h1 class="letter-spacing pb-2 display-4 mt-4">Challenges</h1>
      <p>
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
    </div>
    <ChallengesTable :pagination="pagination" :challenges="challenges" />
    <div class="text-center text-light my-4 border-primary border-2 border-top pt-4">
      <h1 class="letter-spacing pb-2 display-4">Create</h1>
      <p>
        Write your own challenge for others to attempt!
      </p>
    <b-link class="btn btn-primary mt-3" style="border: none" :to="{name:'clg-create'}">
        Create
      </b-link>
    </div>
  </b-container>
</template>

<script>
import ChallengesTable from "@/components/ChallengesTable.vue";
export default {
  name: "Challenges",
  components: { ChallengesTable },
  data() {
    return {
      challenges: [
        {
          ID: 1,
          Problem: "Example",
        },
        {
          ID: 2,
          Problem: "Example",
        },
        {
          ID: 3,
          Problem: "Example",
        },
        {
          ID: 4,
          Problem: "Example",
        },
        {
          ID: 5,
          Problem: "Example",
        },
        {
          ID: 6,
          Problem: "Example",
        },
        {
          ID: 7,
          Problem: "Example",
        },
        {
          ID: 8,
          Problem: "Example",
        },
        {
          ID: 9,
          Problem: "Example",
        },
        {
          ID: 10,
          Problem: "Example",
        },
        {
          ID: 11,
          Problem: "Example",
        },
        {
          ID: 12,
          Problem: "Example",
        },
        {
          ID: 13,
          Problem: "Example",
        },
        {
          ID: 14,
          Problem: "Example",
        },
        {
          ID: 15,
          Problem: "Example",
        },
        {
          ID: 16,
          Problem: "Example",
        },
        {
          ID: 17,
          Problem: "Example",
        },
        {
          ID: 18,
          Problem: "Example",
        },
        {
          ID: 19,
          Problem: "Example",
        },
        {
          ID: 20,
          Problem: "Example",
        },
        {
          ID: 21,
          Problem: "Example",
        },
        {
          ID: 22,
          Problem: "Example",
        },
        {
          ID: 23,
          Problem: "Example",
        },
        {
          ID: 24,
          Problem: "Example",
        },
        {
          ID: 25,
          Problem: "Example",
        },
      ],
      pagination: true,
    };
  },
};
</script>