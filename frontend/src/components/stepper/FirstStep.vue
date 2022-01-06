<template>
  <div>
    <h3>About yourself</h3>
    <b-row class="p-0 m-0">
      <b-col lg="12" md="12">
        <div
          :class="{
            'form-group--error': $v.form.email.$error,
            'form-group--ok': !$v.form.email.$error && $v.form.email.$dirty,
          }"
        >
          <label class="form-label">Email</label>
          <b-form-input
            name="email"
            v-model="form.email"
            type="email"
            class="form__input"
            placeholder="codemonkey@gmail.com"
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
      <b-col lg="12" md="12">
        <div
          :class="{
            'form-group--error': $v.form.nickname.$error,
            'form-group--ok':
              !$v.form.nickname.$error && $v.form.nickname.$dirty,
          }"
        >
          <label class="form-label">Username</label>
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
              v-if="!$v.form.nickname.minLength || !$v.form.nickname.maxLength"
            >
              Your nickname must be 4-20 characters long
            </div>
          </div>
        </div>
      </b-col>
      <div class="text-center mt-2">
        <b-button variant="outline-primary" @click="changeStep()">
          Next
        </b-button>
      </div>
    </b-row>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  name: "FirstStep",
  emits: ["nextStep"],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {
        email: this.data.email,
        nickname: this.data.nickname,
      },
    };
  },
  methods: {
    isValidStep() {
      this.$v.form.email.$touch();
      this.$v.form.nickname.$touch();
      return !this.$v.form.email.$error && !this.$v.form.nickname.$error;
    },
    changeStep() {
      if (this.isValidStep()) {
        this.$emit("nextStep", this.form);
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
    },
  },
};
</script>