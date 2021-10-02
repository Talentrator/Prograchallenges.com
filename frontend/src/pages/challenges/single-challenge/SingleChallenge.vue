<template>
  <b-container class="my-3 px-2 max-width d-block customTextWrap">
    <div class="text-center" v-if="!loaded">
      <b-spinner variant="primary" />
    </div>
    <div v-else>
      <h1 class="m-0 text-white">{{ challengeData.title }}</h1>
      <p class="text-muted m-0">{{ challengeData.nickname }}</p>
      <p class="my-3 text-white" v-html="challengeData.text"></p>
      <h3 class="mt-4 text-white">Your Answers</h3>
      <b-form class="d-flex flex-column">
        <b-form-group>
          <b-row>
            <b-col>
              <b-form-input
                name="email"
                v-model="form.email"
                type="email"
                class="mb-2"
                placeholder="codemonkey@gmail.com"
              />
            </b-col>
            <b-col>
              <b-form-input
                name="name"
                v-model="form.nickname"
                type="text"
                class="mb-2"
                placeholder="greatcoder12"
              />
            </b-col>
          </b-row>
          <b-form-textarea
            rows="3"
            v-model="form.commentText"
            name="text"
            placeholder="Leave your answer here.."
          />
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
            <b-spinner variant="primary" v-if="submitting" />
            <h4 class="m-0">POST</h4>
            &nbsp;
            <b-icon-arrow-right-circle-fill class="text-primary" />
          </div>
        </div>
      </b-form>
      <div class="mb-5">
        <div
          v-for="item in challengeData.comments"
          :key="item.id"
          class="mt-3 my-2 border-secondary"
          :class="{
            'border-bottom':
              challengeData.comments.indexOf(item) + 1 !==
              challengeData.comments.length,
          }"
        >
          <p class="text-muted m-0">{{ item.nickname }}</p>
          <p class="text-white" v-html="item.commentText"></p>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "SingleChallenge",
  data() {
    return {
      form: {
        email: "",
        nickname: "",
        commentText: "",
      },
      challengeData: {},
      loaded: false,
      submitting: false,
    };
  },
  methods: {
    handleSubmit: async function () {
      this.submitting = true;
      const insertChallenge = firebase
        .functions()
        .httpsCallable("insertComment");
      console.log({ ...this.form, challengeId: this.$route.params.id });
      await insertChallenge({
        ...this.form,
        challengeId: this.$route.params.id,
      });
      this.fetchData();
      this.form = { email: "", nickname: "", commentText: "" };
    },
    async fetchData() {
      const getSingleChallenge = firebase
        .functions()
        .httpsCallable("getSingleChallenge");
      const result = await getSingleChallenge({ id: this.$route.params.id });
      this.challengeData = result.data;
      this.challengeData.text = this.challengeData.text.replaceAll(
        "\n",
        "<br>"
      );
      this.challengeData.text = this.challengeData.text.replaceAll(
        " ",
        "&nbsp;"
      );
      this.challengeData.comments.map((comment) => {
        comment.commentText = comment.commentText.replaceAll("\n", "<br>");
        comment.commentText = comment.commentText.replaceAll(" ", "&nbsp;");
      });
      this.loaded = true;
      this.submitting = false;
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.customTextWrap {
  overflow-wrap: anywhere;
}
</style>
