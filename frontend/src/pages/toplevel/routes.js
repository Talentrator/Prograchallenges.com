export default [{
        path: "/",
        name: "tld-home",
        component: () => import("./Home.vue"),
    },
    {
        path: "/team",
        name: "core-team",
        component: () => import("./CoreTeam.vue"),
        meta: {
            title: "Team - Prograchallenges",
        },
    }
];