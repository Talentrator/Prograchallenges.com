import Auth from "@/mixins/AuthMixin.js";
import firebase from "firebase/app";

export default {
    mixins: [Auth],
    data() {
        return {
            voting: false,
        }
    },
    methods: {
        async submitVote(entityId, votes) {
            if (!this.userLoggedIn) return;
            this.voting = true;
            const challengeVote = firebase.functions().httpsCallable("vote");
            const result = (await challengeVote({
                entityId: entityId,
                userId: this.userDetails.id,
                votes,
            })).data;

            this.voting = false;

            return result;
        },

    },
};