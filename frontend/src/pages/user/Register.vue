<template>
  <div class="text-light px-3 pt-2 mx-auto mb-md-5 mb-3 pb-3 border border-primary">
    <h1
      class="text-center my-2 display-4 text-light"
      style="letter-spacing: 0.5rem"
    >
      REGISTER
    </h1>
    <b-form class="border-bottom border-primary pb-3">
      <b-form-group id="input-group-2" class="mt-3">
        <b-form-input
          id="input-2"
          type="text"
          placeholder="Username"
          required
          class="input-width bg-light"
          style="border: none;"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        class="mt-3"
      >
        <b-form-input
          id="input-1"
          type="email"
          placeholder="Email"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" class="mt-3">
        <b-form-input
          id="input-3"
          type="password"
          placeholder="Password"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" class="mt-3">
        <b-form-input
          id="input-4"
          type="password"
          placeholder="Confirm Password"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>
      <center>
        <div
          class="text-center mt-3 d-flex justify-content-center btn btn-primary"
          style="width:19.5rem"
        >
          <a href="#" class="text-dark mx-1">Register </a>
          <b-icon-arrow-right-square-fill
            class="my-auto"
          ></b-icon-arrow-right-square-fill>
        </div>
      </center>
    </b-form>
    <div
      class="text-center mt-3 d-flex justify-content-center btn btn-secondary"
      style="width:19.5rem;"
    >
      <b-icon-github class="my-auto"></b-icon-github>
      <a href="#" class="text-dark mx-1">Register with github</a>
    </div>
    <div
      class="text-center mt-3 d-flex justify-content-center btn btn-secondary"
      style="width:19.5rem;"
    >
      <b-icon-google class="my-auto"></b-icon-google>
      <a href="#" class="text-dark mx-1">Register with google</a>
    </div>
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
<style scoped>
.input-width {
  width: 40rem;
}
@media (max-width: 768px) {
  .input-width {
    width: 18rem;
  }
}
</style>
