<template>
  <div>
      <b-container class="my-3 px-2 mx-auto max-width">
          <h1 class="m-0 text-white">{{challengeData.title}}</h1>
          <p class="text-muted m-0">{{challengeData.nickname}}</p>
          <p class="my-3 text-white" v-html="challengeData.text"></p>
          <h3 class="mt-4 text-white">Your Answers</h3>
          <b-form class="d-flex flex-column">
              <b-form-group>
                <b-row>
                    <b-col lg='6' md='12'>
                        <b-form-input name='email' v-model="form.email" type='email' class="mb-2" placeholder='codemonkey@gmail.com' />
                    </b-col>
                    <b-col lg='6' md='12'>
                        <b-form-input name='name' v-model="form.nickname" type='text' class="mb-2" placeholder='greatcoder12' />
                    </b-col>
                </b-row>
                <b-form-textarea rows="3" v-model="form.commentText" name="text" placeholder="Leave your answer here.." />
              </b-form-group>
              <b-button variant="primary" class="mt-2 align-self-end" @click="handleSubmit">Post</b-button>
          </b-form>
          <div class="mb-5">
              <div v-for="item in challengeData.comments" :key="item.id" class="mt-3 my-2 border-secondary" :class="{'border-bottom': (challengeData.comments.indexOf(item) + 1 !== challengeData.comments.length)}">
                <p class="text-muted m-0">{{ item.nickname }}</p>
                <p class="text-white">{{ item.commentText }}</p>
              </div>
          </div>
      </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'SingleChallenge',
    data(){
        return {
            form: {
                email: '',
                nickname: '',
                commentText: ''
            },
            challengeData: {}
        }
    },
    methods: {
        handleSubmit: async function () {
            const insertChallenge = firebase.functions().httpsCallable('insertComment')
            console.log({...this.form, challengeId: this.$route.params.id});
            await insertChallenge({...this.form, challengeId: this.$route.params.id});
            this.fetchData()
            this.form = {email: '', nickname: '', commentText: ''}
        },
        async fetchData() {
            const getSingleChallenge = firebase.functions().httpsCallable('getSingleChallenge')
            const result = await getSingleChallenge({id: this.$route.params.id});
            this.challengeData = result.data;
            this.challengeData.text = this.challengeData.text.replaceAll('\n', '<br>')
            this.challengeData.text = this.challengeData.text.replaceAll(' ', '&nbsp;')
        },
    },
    mounted(){
        this.fetchData();
    }
}
</script>

<style scoped>

</style>