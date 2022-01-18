
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
    <h1 class="text-center my-2 display-4 text-light">LOG IN</h1>
    <b-form class="pb-3">
      <b-alert
        v-if="!!alert_text"
        variant="danger"
        class="mb-2"
        show
        dismissible
      >
        {{ alert_text }}
      </b-alert>
      <b-form-group id="input-group-2" class="mt-3">
        <label for="" class="form-label">Email</label>
        <b-form-input
          v-model.trim="email"
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="input-width bg-light border-o"
        ></b-form-input>
        <div v-if="$v.email.$dirty">
          <div class="error" v-if="!$v.email.required">
            Please enter your email
          </div>
          <div class="error" v-if="!$v.email.email">
            Please provide a valid email
          </div>
        </div>
      </b-form-group>

      <b-form-group id="input-group-3" class="mt-3">
        <label for="" class="form-label">Password</label>
        <b-form-input
          v-model.trim="password"
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="input-width bg-light border-0"
        ></b-form-input>
        <div v-if="$v.password.$dirty">
          <div class="error" v-if="!$v.password.required">
            Please enter your password
          </div>
          <div class="error" v-if="!$v.password.minLength">
            Your password must be 6 or more characters
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
          @click.prevent="login"
        >
          <span class="" v-if="!loading">
            <span class="mx-1">Login</span>
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
              type="button"
            >
              <b-icon-google class="my-auto"></b-icon-google>
              <span class="mx-1">google</span>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="text-center pt-3">
      Don't have an account?
      <router-link :to="{ name: 'usr-register' }">Sign Up</router-link>
    </div>
  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import firebase from "firebase/app";
import "firebase/functions";
import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      alert_text: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.alert_text = "";

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.loading = false;
        return;
      }

      const success = await this.loginWithEmailAndPassword();

      if (success) this.$router.push({name: 'tld-home'});

      this.loading = false;
    },
    loginWithEmailAndPassword() {
      return firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => true)
        .catch((e) => {
          console.log(e);
          this.alert_text = e.message || "There was an error logging you in, please try again later";
          return false;
        });
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>