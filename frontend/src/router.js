import VueRouter from "vue-router";
import store from "./store";

const routes = [
    ...require("./pages/toplevel/routes.js").default,
    ...require("./pages/user/routes.js").default,
    ...require("./pages/challenges/routes.js").default,
    ...require("./pages/questions/routes.js").default,
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
});

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !store.getters['auth/userLoggedIn']) {
        const path = to.path.replace("/", "");
        // `/login?redirect=${path}`
        next({ name: 'usr-login', query: { redirect: path } });
    }
    next();
});

export default router;