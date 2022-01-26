import firebase from 'firebase/app';
import { mapGetters } from "vuex";
import 'firebase/auth';

export default {
    computed: {
        ...mapGetters("auth", ["userDetails", "userLoggedIn"]),
        firstName() {
            return this.userDetails?.fullName?.split(" ")[0] || "";
        },
    },
    methods: {
        async logOut() {
            await firebase.auth().signOut();
            if (this.$route.meta.requiresAuth) {
                this.$router.push({ name: 'usr-login', query: { redirect: this.$route.path } })
            }
        },
    },
}