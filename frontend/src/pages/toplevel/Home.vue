<template>
  <div class="home">
    <Banner />
    <h1 class="border-primary border-top border-2 pt-3 display-4 text-center text-white">Challenges</h1>
    <ChallengesTable :pagination="pagination" :challenges="challenges" />
    <OtherSections />
  </div>
</template>

<script>
import Banner from "./home/Banner.vue";
import ChallengesTable from "../../components/ChallengesTable.vue";
import OtherSections from "./home/OtherSections.vue";

export default {
  name: "Home",
  components: {
    Banner,
    ChallengesTable,
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
