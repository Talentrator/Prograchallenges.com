<template>
  <b-container>
    <div class="px-3 py-2 mx-auto max-width">
      <h1 class="text-center mt-2">Create a challenge</h1>
      <p class="text-muted text-center mb-3">
        Write your own challenge for others to attempt!
      </p>
      <b-form class="px-0 gig-small-container">
        <DropDown>
          <template v-slot:preview=""> About yourself </template>
          <b-row class="p-0 m-0">
            <b-col lg="6" md="12">
              <div
                :class="{
                  'form-group--error': $v.form.email.$error,
                  'form-group--ok':
                    !$v.form.email.$error && $v.form.email.$dirty,
                }"
              >
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
        </DropDown>
        <DropDown>
          <template v-slot:preview=""> About the challenge</template>
          <div
            :class="{
              'form-group--error': $v.form.title.$error,
              'form-group--ok': !$v.form.title.$error && $v.form.title.$dirty,
            }"
          >
            <b-form-input
              name="title"
              v-model="form.title"
              type="text"
              class="form__input"
              placeholder="Challenge Title"
              v-model.trim="$v.form.title.$model"
              :class="{
                'mb-2': !$v.form.title.$error,
              }"
            />
            <div v-if="$v.form.title.$dirty">
              <div class="error mb-2" v-if="!$v.form.title.required">
                Please input title
              </div>
              <div class="error mb-2" v-if="!$v.form.title.minLength">
                Title must have at least
                {{ $v.form.title.$params.minLength.min }} letters.
              </div>
            </div>
          </div>

          <div
            :class="{
              'form-group--error': $v.form.text.$error,
              'form-group--ok': !$v.form.text.$error && $v.form.text.$dirty,
            }"
          >
            <b-form-textarea
              v-model="form.text"
              rows="10"
              name="text"
              placeholder="Your awesome challenge here"
              v-model.trim="$v.form.text.$model"
              class="form__input"
              :class="{
                'mb-2': !$v.form.text.$error,
              }"
            />
            <div v-if="$v.form.text.$dirty">
              <div class="error mb-2" v-if="!$v.form.text.required">
                Please input some challenge text
              </div>
              <div class="error mb-2" v-if="!$v.form.text.minLength">
                Your challenge description must be at least 20 characters long
              </div>
            </div>
          </div>
        </DropDown>
        <DropDown>
          <template v-slot:preview=""> About the code </template>
          <CodeEditor
            v-model="form.boilerplate"
            lang="javascript"
            editorHeight="200px"
          />
          <CodeEditor
            v-model="form.unitTest"
            lang="javascript"
            editorHeight="200px"
          />
          <CodeEditor
            v-model="form.exampleSolution"
            lang="javascript"
            editorHeight="200px"
          />
        </DropDown>

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
            SUBMIT
            <b-spinner variant="primary" small v-if="submitting" />&nbsp;
            <b-icon-arrow-right-circle-fill
              class="text-primary"
              v-if="!submitting"
            />
          </div>
        </div>
      </b-form>
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import CodeEditor from "@/components/code-editor/CodeEditor.vue";
import DropDown from "@/components/DropDown.vue";

export default {
  name: "CreateChallenge",
  data() {
    return {
      form: {
        title: "",
        email: "",
        nickname: "",
        text: "",
        programmingLanguage: "",
        boilerplate: "",
        unitTest: "",
        exampleSolution: "",
      },
      submitting: false,
    };
  },
  methods: {
    handleSubmit: async function() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitting = true;
        const insertChallenge = firebase
          .functions()
          .httpsCallable("insertChallenge");
        const result = await insertChallenge(this.form);
        this.$router.push(`/challenge/${result.data}`);
        this.$v.$reset();
      }
    },
  },
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
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
        minLength: minLength(20),
      },
    },
  },
  components: {
    CodeEditor,
    DropDown,
  },
};
</script>

<style scoped></style>
