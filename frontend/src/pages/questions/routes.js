export default [{
    path: "/questions/create",
    name: "question-create",
    component: () =>
        import ("./CreateQuestion.vue"),
    meta: {
        title: "Create Question - Prograchallenges",
        requiresAuth: true
    }
}];