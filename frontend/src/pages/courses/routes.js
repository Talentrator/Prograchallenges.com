export default [
    {
      path: "/challenge/:id",
      name: "courses",
      component: () => import("./mainpage.vue"),
      props: true,
      meta: {
        title: "Courses - Prograchallenges"
      },
    }
  ];