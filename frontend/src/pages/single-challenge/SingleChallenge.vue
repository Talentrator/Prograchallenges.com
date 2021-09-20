<template>
  <div>
      <b-container class="my-3 px-2">
          <h1 class="m-0 text-white">This is the challenge title!</h1>
          <p class="text-muted m-0">abc123@gmail.com</p>
          <p class="my-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ullam error temporibus magnam nemo nam fuga sint doloribus praesentium, labore quae enim similique sapiente fugiat dolorem, quaerat velit voluptas reiciendis. Laborum doloremque quisquam, temporibus ipsum vitae, iste ea rerum sapiente consequatur libero quibusdam id nesciunt eos magnam labore explicabo reprehenderit suscipit ducimus ad sint eaque? Exercitationem harum nemo inventore repellat commodi ex laboriosam suscipit quas temporibus odit id aperiam impedit corporis officia in animi doloribus maxime quae error, ipsam quo quia culpa expedita nulla. Reprehenderit consequatur deserunt a itaque, esse praesentium tempore debitis fugiat, aliquid, veniam assumenda sed rem velit.
          </p>
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
                <b-form-textarea rows="3" v-model="form.text" name="text" placeholder="Leave your answer here.." />
              </b-form-group>
              <b-button variant="primary" class="mt-2 align-self-end" @click="handleSubmit">Post</b-button>
          </b-form>
          <div class="mb-5">
              <div v-for="item in comments" :key="item.index" :class="{'mt-3': true, 'my-2': true, 'border-bottom': (comments.indexOf(item) + 1 !== comments.length), 'border-secondary': true}">
                <p class="text-muted m-0">{{ item.email }}</p>
                <p class="text-white">{{ item.text }}</p>
              </div>
          </div>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'SingleChallenge',
    data(){
        return {
            form: {
                email: '',
                nickname: '',
                text: ''
            },
            comments: [
                {
                    email: 'edf456@gmail.com',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi distinctio placeat, nemo fuga nobis deserunt voluptas sit nihil. Voluptatem.'
                },
                {
                    email: 'edf456@gmail.com',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi distinctio placeat, nemo fuga nobis deserunt voluptas sit nihil. Voluptatem.'
                },
                {
                    email: 'edf456@gmail.com',
                    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quasi distinctio placeat, nemo fuga nobis deserunt voluptas sit nihil. Voluptatem.'
                }
            ]
        }
    },
    methods: {
        handleSubmit: function () {
            console.log('email >>>', this.form.email)
            console.log('nickname >>>', this.form.nickname)
            console.log('text >>>', this.form.text)
        },
    }
}
</script>

<style scoped>

</style>