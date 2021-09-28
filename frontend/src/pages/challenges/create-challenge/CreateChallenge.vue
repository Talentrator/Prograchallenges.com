<template>
  <b-container>
    <div class="px-3 py-2 mx-auto max-width">
      <h1 class="text-center mt-2 text-white">Create a challenge</h1>
      <p class="text-muted text-center mb-3">
        Write your own challenge for others to attempt!
      </p>
      <b-form class="px-0">
        <b-form-group
          id="input-group-1"
          class="px-1 px-md-5 w-100 mx-auto max-width"
        >
          <b-form-input
            name="title"
            v-model="form.title"
            type="text"
            :state="validateTitle"
            :class="{ 'mb-2': validateTitle == null || validateTitle }"
            placeholder="Challenge Title"
          />
          <b-form-invalid-feedback class="mb-2" :state="validateTitle">
            The title must be at least 6 characters long.
          </b-form-invalid-feedback>
          <b-row>
            <b-col lg="6" md="12">
              <b-form-input
                name="email"
                v-model="form.email"
                type="email"
                :state="validateEmail"
                :class="{ 'mb-2': validateEmail == null || validateEmail }"
                placeholder="codemonkey@gmail.com"
              />
              <b-form-invalid-feedback class="mb-2" :state="validateEmail">
                Enter a valid email address.
              </b-form-invalid-feedback>
            </b-col>
            <b-col lg="6" md="12">
              <b-form-input
                name="name"
                v-model="form.nickname"
                type="text"
                :state="validateName"
                :class="{ 'mb-2': validateName == null || validateName }"
                placeholder="greatcoder12"
              />
              <b-form-invalid-feedback class="mb-2" :state="validateName">
                Your nickname must be 5-20 characters long.
              </b-form-invalid-feedback>
            </b-col>
          </b-row>
          <b-form-textarea
            v-model="form.text"
            rows="10"
            name="text"
            placeholder="Your awesome challenge here"
            :state="validateText"
            :class="{ 'mb-2': validateText == null || validateText }"
          />
          <b-form-invalid-feedback class="mb-2" :state="validateText">
            The challenge must contain more than 60 characters.
          </b-form-invalid-feedback>

          <div class="d-md-flex my-2 justify-content-end text-primary">
            <div
              class="
                border border-primary
                d-flex
                align-items-center
                p-2
                justify-content-center justify-content-md-start
              "
              style="cursor: pointer"
              @click="handleSubmit"
            >
              <b-spinner variant="primary" v-if="submitting" />&nbsp;
              <h4 class="m-0">SUBMIT</h4>
              &nbsp;
              <b-icon-arrow-right-circle-fill class="text-primary" />
            </div>
          </div>
        </b-form-group>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "CreateChallenge",
  data() {
    return {
      form: {
        title: "",
        email: "",
        nickname: "",
        text: "",
      },
      submitting: false,
    };
  },
  methods: {
    handleSubmit: async function () {
      if (
        !this.form.title ||
        !this.form.email ||
        !this.form.nickname ||
        !this.form.text
      ) {
        alert("Please input the required fields"); // TODO: Replace this with a better way
      } else if (
        !this.validateTitle ||
        !this.validateEmail ||
        !this.validateName ||
        !this.validateText
      ) {
        alert("Please enter valid information"); // TODO: Replace this with a better way
      } else {
        this.submitting = true;
        const insertChallenge = firebase
          .functions()
          .httpsCallable("insertChallenge");
        const result = await insertChallenge(this.form);
        this.$router.push(`/challenge/${result.data}`);
      }
    },
  },
  computed: {
    validateTitle() {
      if (!this.form.title.length) return null;
      else return this.form.title.length > 6;
    },
    validateEmail() {
      if (!this.form.email.length) return null;
      else {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(this.form.email.toLowerCase());
      }
    },
    validateName() {
      if (!this.form.nickname.length) return null;
      else
        return (
          this.form.nickname.length >= 5 && this.form.nickname.length <= 20
        );
    },
    validateText() {
      if (!this.form.text.length) return null;
      else return this.form.text.length > 60;
    },
  },
};
</script>

<style scoped></style>
