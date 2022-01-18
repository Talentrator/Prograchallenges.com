import firebase from 'firebase/app';
import 'firebase/auth';

export default {
    methods: {
        async logOut() {
            await firebase.auth().signOut();
        },
    }
}