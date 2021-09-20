<template>
  <b-container>
      <div class="px-3 py-2">
        <h1 class="text-center mt-2 text-white">Create a challenge</h1>
        <p class="text-muted text-center mb-3">Create a challenge for others to face!</p>
        <b-form class="px-0 px-md-5">
          <b-form-group id="input-group-1" class="px-1 px-md-5">
            <b-form-textarea rows="10" name="text" placeholder="Your awesome challenge here" />
            <b-button variant="primary" class="mt-2 w-100 mx-auto">Submit</b-button>
          </b-form-group>
        </b-form>
      </div>
  </b-container>
</template>

<script>
export default {
  name: 'CreateChallenge'
}
</script>

<style scoped>
</style>