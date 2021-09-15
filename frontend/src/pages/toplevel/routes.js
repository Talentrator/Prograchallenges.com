export default [
  {
    path: "/",
    name: "Home",
    component: () => import("./Home.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import("./Auth.vue"),
  },
];
