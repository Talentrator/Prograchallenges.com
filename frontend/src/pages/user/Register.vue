<template>
  <div class="text-center" v-if="loading">
    <b-spinner variant="primary" />
  </div>
  <div v-else>
    <div
      class="
        text-light
        px-3
        pt-2
        mx-auto
        mb-md-5 mb-3
        pb-3
        border border-primary
      "
    >
      <h1 class="text-center my-2 display-4 text-light">SIGN UP</h1>
      <b-form class="border-bottom border-primary pb-3">
        <b-form-group id="input-group-2" class="mt-3">
          <b-form-input
            id="input-2"
            type="text"
            placeholder="Username"
            required
            class="input-width bg-light"
            style="border: none"
            v-model="form.username"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-1" class="mt-3">
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Email"
            required
            class="input-width bg-light"
            style="border: none"
            v-model="form.email"
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
            v-model="form.password"
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
            v-model="form.cpassword"
          ></b-form-input>
        </b-form-group>
        <center>
          <div
            class="
              text-center
              mt-3
              d-flex
              justify-content-center
              btn btn-primary
            "
            style="width: 19rem"
          >
            <a href="#" class="text-dark mx-1">SIGN UP</a>
            <b-icon-arrow-right-square-fill
              class="my-auto"
            ></b-icon-arrow-right-square-fill>
          </div>
        </center>
      </b-form>
      <div
        class="text-center mt-3 d-flex justify-content-center btn btn-secondary"
        style="width: 19rem"
      >
        <b-icon-github class="my-auto"></b-icon-github>
        <a href="#" class="text-dark mx-1">sign up with github</a>
      </div>
      <div
        class="text-center mt-3 d-flex justify-content-center btn btn-secondary"
        style="width: 19rem"
      >
        <b-icon-google class="my-auto"></b-icon-google>
        <a href="#" class="text-dark mx-1">sign up with google</a>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        email: "",
        cpassword: "",
      },
      submitting: false,
    };
  },
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
        password: this.password,
        username: this.username,
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
