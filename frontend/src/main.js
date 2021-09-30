import firebase from "firebase";
import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
    BootstrapVue
} from "bootstrap-vue";
import {
    BootstrapVueIcons
} from "bootstrap-vue";
import Vuelidate from 'vuelidate'

import "./firebase";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "./theme.scss";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuelidate)

Vue.config.productionTip = false;

let vueInstance;

firebase.auth().onAuthStateChanged(() => {
    if (!vueInstance) {
        vueInstance = new Vue({
            router,
            store,
            render: (h) => h(App),
        }).$mount("#app");
    }
});