export default [{
        path: "/user/register",
        name: "usr-register",
        component: () =>
            import ("./Register.vue"),
        meta: {
            title: "Register - Prograchallenges",
        },
    },
    {
        path: "/user/login",
        name: "usr-login",
        component: () =>
            import ("./LogIn.vue"),
        meta: {
            title: "Log In - Prograchallenges",
        },
    },
    {
        path: "/user/comingsoon",
        name: "usr-coming-soon",
        component: () =>
            import ("./FeatureComingSoon.vue"),
        meta: {
            title: "Coming Soon",
        },
    },
];