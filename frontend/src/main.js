import firebase from "firebase";
import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueRouter);

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
