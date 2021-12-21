import firebase from "firebase/app";
import "firebase/functions";

export default {
    data() {
        return {
            sortBy: "date_desc",
            sortOptions: [{
                    title: "Newest",
                    value: "date_desc"
                },
                {
                    title: "Relevance",
                    value: "relevance"
                },
                {
                    title: "Oldest",
                    value: "date_asc"
                },
            ]
        }
    },
    methods: {
        async fetchData() {
            this.loaded = false;

            const getAllChallenges = firebase
                .functions()
                .httpsCallable("getAllChallenges");
            const result = await getAllChallenges({ sortBy: this.sortBy });
            this.challenges = result.data;
            this.paginate(this.perPage, 0);
            this.loaded = true;
        },
    },
    watch: {
        sortBy() {
            this.fetchData();
        }
    }
}