<template>
  <b-container>
      <div class="px-3 py-2">
        <h1 class="text-center mt-2">Create a challenge</h1>
        <p class="text-muted text-center mb-3">Create a challenge for others to face!</p>
        <b-form>
          <b-form-group id="input-group-1" class="px-1 px-md-5">
            <b-form-textarea cols="30" rows="10" style="resize: none;" class="form-control w-100 shadow-none" name="text" placeholder="Your awesome challenge here" />
            <button class="btn btn-primary w-100 mt-2">SUBMIT</button>
          </b-form-group>
        </b-form>
      </div>
  </b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>