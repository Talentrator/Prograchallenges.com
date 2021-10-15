export default [
  {
    path: "/challenge/:id",
    name: "clg-single",
    component: () => import("./SingleChallenge.vue"),
    meta: {
      title: "Single Challenge - Prograchallenges"
    }
  },
  {
    path: "/challenges/create",
    name: "clg-create",
    component: () => import("./CreateChallenge.vue"),
    meta: {
      title: "Create Challenge - Prograchallenges"
    }
  }
];
