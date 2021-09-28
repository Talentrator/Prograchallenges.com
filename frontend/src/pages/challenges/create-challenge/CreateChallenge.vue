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
            class='mb-2'
            placeholder="Challenge Title"
          />
          <b-row>
            <b-col lg="6" md="12">
              <b-form-input
                name="email"
                v-model="form.email"
                type="email"
                :state="validateEmail"
                class='mb-2'
                placeholder="codemonkey@gmail.com"
              />
            </b-col>
            <b-col lg="6" md="12">
              <b-form-input
                name="name"
                v-model="form.nickname"
                type="text"
                :state="validateName"
                class='mb-2'
                placeholder="greatcoder12"
              />
            </b-col>
          </b-row>
          <b-form-textarea
            v-model="form.text"
            rows="10"
            name="text"
            class='mb-2'
            placeholder="Your awesome challenge here"
            :state="validateText"
          />

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
      this.submitting = true;
      const insertChallenge = firebase
        .functions()
        .httpsCallable("insertChallenge");
      const result = await insertChallenge(this.form);
      this.$router.push(`/challenge/${result.data}`);
    },
  },
  computed: {
    validateTitle() {
      return this.form.title.length > 6 && this.form.title.length < 40;
    },
    validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.form.email.toLowerCase());
    },
    validateName() {
      return this.form.nickname.length > 5 && this.form.nickname.length < 12;
    },
    validateText() {
      return this.form.text.length > 60;
    }
  }
};
</script>

<style scoped></style>
