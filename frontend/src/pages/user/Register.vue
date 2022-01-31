<template>
  <div
    class="
      text-light
      px-2 px-md-3
      pt-2
      mt-3
      mx-2 mx-md-auto
      mb-md-5 mb-3
      border border-primary
      pb-4
    "
  >
    <h1 class="text-center my-2 display-4 text-light">SIGN UP</h1>
    <b-alert v-if="!!alert_text" variant="danger" class="mb-2" show dismissible>
      {{ alert_text }}
    </b-alert>
    <b-form class="pb-3">
      <b-form-group id="input-group-2" class="mt-3">
        <label for="" class="form-label">Username</label>
        <b-form-input
          v-model="username"
          v-model.trim="$v.username.$model"
          type="text"
          placeholder="Username"
          class="input-width bg-light border-0"
          name="username"
        ></b-form-input>
        <div v-if="$v.username.$dirty">
          <div class="error" v-if="!$v.username.required">
            Please enter your username
          </div>
        </div>
      </b-form-group>

      <b-form-group id="input-group-1" class="mt-3">
        <label for="" class="form-label">Email</label>
        <b-form-input
          v-model="email"
          v-model.trim="$v.email.$model"
          type="email"
          placeholder="Email"
          class="input-width bg-light border-0"
        ></b-form-input>
        <div v-if="$v.email.$dirty">
          <div class="error" v-if="!$v.email.required">
            Please enter your email
          </div>
          <div class="error mb-2" v-if="!$v.email.email">
            Please enter a valid email
          </div>
        </div>
      </b-form-group>

      <b-form-group id="input-group-1" class="mt-3">
        <label for="" class="form-label">Full Name</label>
        <b-form-input
          v-model="full_name"
          v-model.trim="$v.full_name.$model"
          type="text"
          placeholder="John Doe"
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
        <div v-if="$v.full_name.$dirty">
          <div class="error" v-if="!$v.full_name.required">
            Please enter your full name
          </div>
        </div>
      </b-form-group>

      <b-form-group id="input-group-3" class="mt-3">
        <label for="" class="form-label">Password</label>
        <b-form-input
          v-model="pw"
          v-model.trim="$v.pw.$model"
          type="password"
          placeholder="Password"
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
        <div v-if="$v.pw.$dirty">
          <div class="error" v-if="!$v.pw.required">
            Please enter your password
          </div>
          <div class="error" v-if="!$v.pw.minLength">
            Your password must be 6 or more characters
          </div>
        </div>
      </b-form-group>

      <b-form-group id="input-group-4" class="mt-3">
        <label for="" class="form-label">Confirm Password</label>
        <b-form-input
          v-model="confirm_password"
          v-model.trim="$v.confirm_password.$model"
          type="password"
          placeholder="Confirm Password"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
        <div v-if="$v.confirm_password.$dirty">
          <div class="error" v-if="!$v.confirm_password.required">
            Please enter your password
          </div>
          <div class="error" v-if="!$v.confirm_password.sameAsPassword">
            Your confirm password should be the same as password
          </div>
        </div>
      </b-form-group>
      <center>
        <button
          class="
            text-center
            mt-5
            d-flex
            justify-content-center
            btn btn-primary
            w-100
          "
          type="button"
          @click="signUp"
        >
          <span class="" v-if="!loading">
            <span class="mx-1">Sign up</span>
            <b-icon-arrow-right class="my-auto"></b-icon-arrow-right>
          </span>

          <b-spinner variant="white" small v-if="loading" />&nbsp;
        </button>
      </center>
    </b-form>
    <div class="divider row my-3">
      <b-col class="d-flex my-auto">
        <hr class="hr-text text-primary my-0 w-100" />
      </b-col>
      <b-col cols="2" class="text-center">
        <span>OR</span>
      </b-col>
      <b-col class="d-flex my-auto">
        <hr class="hr-text text-primary my-0 w-100" />
      </b-col>
    </div>
    <div class="text-center">
      <b-row>
        <b-col md="6">
          <div class="text-center mt-3">
            <b-button
              variant="outline-secondary"
              class="w-100 d-flex justify-items-center justify-content-center"
            >
              <b-icon-github class="my-auto"></b-icon-github>
              <span class="mx-1">github</span>
            </b-button>
          </div>
        </b-col>
        <b-col md="6">
          <div class="text-center mt-3">
            <b-button
              variant="outline-secondary"
              class="d-flex justify-items-center justify-content-center w-100"
            >
              <b-icon-google class="my-auto"></b-icon-google>
              <span class="mx-1">google</span>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="text-center pt-3">
      Already have an account?
      <router-link :to="{ name: 'usr-login' }">Login</router-link>
    </div>
  </div>
</template>

<script>
import {
  required,
  maxLength,
  minLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
import firebase from "firebase/app";
import "firebase/functions";
import "firebase/auth";

export default {
  data: () => ({
    email: "",
    pw: "",
    confirm_password: "",
    username: "",
    full_name: "",
    loading: false,
    alert_text: "",
  }),
  methods: {
    async signUp() {
      this.loading = true;
      this.alert_text = "";

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.loading = false;
        return;
      }

      // await firebase.auth().signOut();
      let loginObject = this.bundleLoginData();

      // // TODO: take the returned data object which indicates possible errors in signing up!
      try {
        const result = (
          await firebase.functions().httpsCallable("createUser")(loginObject)
        ).data;
        await this.handleEventualErrors(result);
      } catch (error) {
        console.log(error);
      }
    },
    bundleLoginData() {
      return {
        password: this.pw,
        username: this.username,
        fullName: this.full_name,
        email: this.email,
      };
    },
    async handleEventualErrors(returnedError) {
      if (returnedError.error) {
        this.alert_text = returnedError?.error_code.errorInfo.message || '';
        this.loading = false;
      } else {
        await firebase.auth().signInWithEmailAndPassword(this.email, this.pw);
        if (this.$store.getters['auth/userLoggedIn']) {
          console.log("logged in");
          this.$router.push({name: 'tld-home'})
        }
      }
    },
  },
  validations: {
    email: {
      required,
      email,
      maxLength: maxLength(150),
    },
    pw: {
      required,
      minLength: minLength(6),
    },
    confirm_password: {
      required,
      sameAsPassword: sameAs("pw"),
    },
    username: {
      required,
      maxLength: maxLength(150),
    },
    full_name: {
      required,
      maxLength: maxLength(150),
    },
  },
};
</script>