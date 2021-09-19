export default [
    {
      path: "/challenge/:id",
      name: "clg-single",
      component: () => import("./SingleChallenge.vue"),
      meta: {
        title: "Single Challenge - Prograchallenges",
      },
    },
  ];
  