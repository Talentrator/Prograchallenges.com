import Vue from 'vue'
import Vuex from 'vuex';
import firebase from '@/firebase';

import auth from './auth';

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
    },
    state: {},
    mutations: {},
    actions: {},
})

firebase.auth().onAuthStateChanged((user) => {
    store.commit('auth/setLoggedIn', !!user);
    store.dispatch('auth/update_user_data');
});

export default store;