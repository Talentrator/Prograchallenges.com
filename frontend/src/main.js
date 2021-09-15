import auth from "firebase";
import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

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
