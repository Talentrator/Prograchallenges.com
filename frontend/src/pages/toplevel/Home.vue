<template>
  <div class="home">
    <Banner />
    <div class="text-center text-light">
      <h1 class="pb-2 display-4 mt-4">C h a l l e n g e s</h1>
      <p>
        Choose a challenge, read the problem, write code, submit , that's it!
      </p>
    </div>
    <Challenges :pagination="pagination" :challenges="challenges" />
    <div class="text-center">
      <b-link class="btn btn-primary mt-3" style="border: none" :to="{name:'challenges'}">
        View More Challenges
      </b-link>
    </div>
    <OtherSections />
  </div>
</template>

<script>
import Banner from "./home/Banner.vue";
import Challenges from "../../components/ChallengesTable.vue";
import OtherSections from "./home/OtherSections.vue";

export default {
  name: "Home",
  components: {
    Banner,
    Challenges,
    OtherSections,
  },
  data() {
    return {
      challenges: [
        {
          ID: 1,
          Problem: "Example",
          Languages: "Example",
          Difficulty: "Medium",
        },
        {
          ID: 2,
          Problem: "Example",
          Languages: "Example",
          Difficulty: "Medium",
        },
        {
          ID: 3,
          Problem: "Example",
          Languages: "Example",
          Difficulty: "Medium",
        },
        {
          ID: 4,
          Problem: "Example",
          Languages: "Example",
          Difficulty: "Medium",
        },
        {
          ID: 5,
          Problem: "Example",
          Languages: "Example",
          Difficulty: "Medium",
        },
      ],
      pagination: false,
    };
  },
};
</script>
