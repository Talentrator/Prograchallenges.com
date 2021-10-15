<template>
  <div>
    <h3 class="mt-4 text-white">Your Answers</h3>
    <b-form class="d-flex flex-column">
      <b-form-group>
        <b-row>
          <b-col lg="6" md="12">
            <div
              :class="{
                'form-group--error': $v.form.email.$error,
                'form-group--ok': !$v.form.email.$error && $v.form.email.$dirty,
              }"
            >
              <b-form-input
                name="email"
                v-model="form.email"
                type="email"
                placeholder="codemonkey@gmail.com"
                class="form__input"
                v-model.trim="$v.form.email.$model"
                :class="{
                  'mb-2': !$v.form.email.$error,
                }"
              />
              <div v-if="$v.form.email.$dirty">
                <div class="error mb-2" v-if="!$v.form.email.required">
                  Please input email
                </div>
                <div class="error mb-2" v-if="!$v.form.email.email">
                  Please enter a valid email
                </div>
              </div>
            </div>
          </b-col>
          <b-col lg="6" md="12">
            <div
              :class="{
                'form-group--error': $v.form.nickname.$error,
                'form-group--ok':
                  !$v.form.nickname.$error && $v.form.nickname.$dirty,
              }"
            >
              <b-form-input
                name="name"
                v-model="form.nickname"
                type="text"
                placeholder="greatcoder12"
                v-model.trim="$v.form.nickname.$model"
                class="form__input"
                :class="{
                  'mb-2': !$v.form.nickname.$error,
                }"
              />
              <div v-if="$v.form.nickname.$dirty">
                <div class="error mb-2" v-if="!$v.form.nickname.required">
                  Please input a nickname
                </div>
                <div
                  class="error mb-2"
                  v-if="
                    !$v.form.nickname.minLength || !$v.form.nickname.maxLength
                  "
                >
                  Your nickname must be 4-20 characters long
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <div
          :class="{
            'form-group--error': $v.form.commentText.$error,
            'form-group--ok':
              !$v.form.commentText.$error && $v.form.commentText.$dirty,
          }"
        >
          <b-form-textarea
            rows="3"
            v-model="form.commentText"
            name="text"
            placeholder="Leave your answer here..."
            v-model.trim="$v.form.commentText.$model"
            class="form__input"
            :class="{
              'mb-2': !$v.form.commentText.$error,
            }"
          />
          <div v-if="$v.form.commentText.$dirty">
            <div class="error mb-2" v-if="!$v.form.commentText.required">
              Please input your answer
            </div>
          </div>
        </div>
      </b-form-group>
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
          <h4 class="m-0">POST</h4>
          <b-spinner variant="primary" small v-if="submitting" />
          <b-icon-arrow-right-circle-fill
            class="text-primary"
            v-if="!submitting"
          />
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import firebase from "firebase";
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  data: () => ({
    form: {
      email: "",
      nickname: "",
      commentText: "",
    },
    submitting: false,
  }),
  methods: {
    async handleSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitting = true;
        const insertChallenge = firebase
          .functions()
          .httpsCallable("insertComment");

        await insertChallenge({
          ...this.form,
          challengeId: this.$route.params.id,
        });

        this.fetchData();
        this.form = { email: "", nickname: "", commentText: "" };
        this.$v.$reset();
      }
    },
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      nickname: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      commentText: {
        required,
      },
    },
  },
};
</script>

<style></style>
