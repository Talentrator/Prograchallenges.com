<template>
  <div>
    <!-- todo implement interface -->
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";

export default {
  data: () => ({
    email: "",
    pw: "",
    first_name: "",
    last_name: "",
    acceptTOS: false,
    loading: false,

    alert_text: "",
  }),
  methods: {
    async signUp() {
      this.loading = true;
      this.alert_text = "";

      // TODO: First logout before logging back in

      let loginObject = this.bundleLoginData();

      await firebase.functions().httpsCallable("CreateNewUser")(loginObject); // TODO: take the returned data object which indicates possible errors in signing up!
    },
    bundleLoginData() {
      return {
        password: this.pw,
        userType: this.userType,
        firstName: this.first_name,
        lastName: this.last_name,
        email: this.email,
      };
    },
  },
};
</script>

<style>
</style>