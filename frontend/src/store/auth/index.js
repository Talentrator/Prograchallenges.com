import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/auth';

export default {
    namespaced: true,
    state: {
        loggedIn: false,
        emailVerified: false,
        userObject: {},
        all_data_loaded: false,
    },
    getters: {
        userLoggedIn(state) {
            return state.loggedIn;
        }
    },
    mutations: {
        set_user_object(state, uo) {
            state.userObject = uo;
        },
        data_done_loading(state) {
            state.all_data_loaded = true;
        },
        data_is_loading(state) {
            state.all_data_loaded = false;
        },
        setLoggedIn(state, loggedIn) {
            state.loggedIn = loggedIn;
        },
        setInUserObject(state, uob) {
            state.userObject = {...state.userObject, ...uob };
        },
        updateUserObject(state, newObj) {
            state.userObject = {
                ...state.userObject,
                ...newObj,
            };
        },
    },
    actions: {
        async updateUserObject({ commit }) {
            const uo = (
                await firebase.functions().httpsCallable('GetOwnUserObject')()
            ).data;
            // if (uo.userType) 
            commit('set_user_object', uo);
            // else this.commit('setLoggedIn', false);
        },
        async update_logged_in_user_data({ dispatch }) {
            await dispatch('updateUserObject');
        },

        async update_user_data({ commit, dispatch, getters }) {
            if (getters.userLoggedIn)
                await dispatch('update_logged_in_user_data');
            else commit('set_user_object', {});

            commit('data_done_loading');
        },
        async update_user_data({ getters }) {
            if (getters.userLoggedIn)
                await this.dispatch('update_logged_in_user_data');
            else this.commit('set_user_object', {});

            this.commit('data_done_loading');
        },
    }

}