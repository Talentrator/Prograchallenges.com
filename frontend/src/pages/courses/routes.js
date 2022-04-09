export default [
    {
      path: "/courses",
      name: "courses",
      component: () => import("./mainpage.vue"),
      props: true,
      meta: {
        title: "Courses - Prograchallenges"
      },
    },
    {
      path: "/ethercourse",
      name: "ethereum",
      component: () => import("./ethercourse.vue"),
      props: true,
      meta: {
        title: "Courses - Prograchallenges"
      },
    }
  ];
