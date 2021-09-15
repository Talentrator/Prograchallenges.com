<<<<<<< HEAD
import auth from "../firebase";
=======
>>>>>>> 1b3be19d60d0093b091e60bc02f04105321fe170
import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import * as firebase from "firebase";
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

let vueInstance;

auth.onAuthStateChanged(() => {
  if (!vueInstance) {
    vueInstance = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
