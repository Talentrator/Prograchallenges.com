export default [
    {
      path: "/challenges/create",
      name: "clg-create",
      component: () => import("./CreateChallenge.vue"),
      meta: {
        title: "Create Challenge - Prograchallenges",
      },
    },
  ];
  