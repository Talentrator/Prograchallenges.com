<template>
  <div>
    <h6 class="mt-4 text-white">Your comments</h6>
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
            'form-group--error': $v.form.text.$error,
            'form-group--ok': !$v.form.text.$error && $v.form.text.$dirty,
          }"
        >
        <b-button variant="secondary" size="sm" class="px-1 py-1 mb-1" >Preview</b-button>
          <b-form-textarea
            rows="3"
            v-model="form.text"
            name="text"
            placeholder="Leave your answer here..."
            v-model.trim="$v.form.text.$model"
            class="form__input"
            :class="{
              'mb-2': !$v.form.text.$error,
            }"
          />
          <div v-if="$v.form.text.$dirty">
            <div class="error mb-2" v-if="!$v.form.text.required">
              Please input your answer
            </div>
          </div>
        </div>
      </b-form-group>
      <div class="d-md-flex my-2 justify-content-end text-primary">
        <b-button variant="outline-primary" @click="handleSubmit">
          POST
          <b-spinner variant="primary" small v-if="submitting" />
          <b-icon-arrow-right-circle-fill v-if="!submitting" />
        </b-button>
      </div>
    </b-form>
    <div v-html="markdownToHtml"></div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/functions";
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import {marked} from "marked";

export default {
  data: () => ({
    form: {
      email: "",
      nickname: "",
      text: "",
    },
    submitting: false,
  }),
  computed: {
    markdownToHtml() {
      return marked(this.form.text);
    },
  },
  methods: {
    async handleSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) return;
      this.submitting = true;
      const insertChallenge = firebase
        .functions()
        .httpsCallable("insertComment");

      await insertChallenge({
        ...this.form,
        challengeId: this.$route.params.id,
      });

      this.$emit("refetch");
      this.form = { email: "", nickname: "", text: "" };
      this.$v.$reset();
      this.submitting = false;
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
      text: {
        required,
      },
    },
  },
};
</script>

<style></style>
