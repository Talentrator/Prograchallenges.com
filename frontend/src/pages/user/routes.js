export default [
  {
    path: "/user/register",
    name: "usr-register",
    component: () => import("./Register.vue"),
    meta: {
      title: "Register - Prograchallenges",
    },
  },
  {
    path: "/user/log-in",
    name: "usr-login",
    component: () => import("./LogIn.vue"),
    meta: {
      title: "Log In - Prograchallenges",
    },
  },
];
