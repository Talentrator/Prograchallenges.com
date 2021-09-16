export default [
  {
    path: "/user/register",
    name: "tld-register",
    component: () => import("./Regtister.vue"),
    meta: {
      title: "Register - Prograchallenges",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("./Auth.vue"),
    meta: {
      title: "Log In - Prograchallenges",
    },
  },
];
