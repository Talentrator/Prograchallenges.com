
<template>
  <div
    class="
      text-light
      px-2 px-md-3
      pt-2
      mt-3
      mx-2 mx-md-auto
      mb-md-5 mb-3
      border border-primary
      pb-4
    "
  >
    <h1 class="text-center my-2 display-4 text-light">LOG IN</h1>
    <b-form class="pb-3">
      <b-form-group id="input-group-2" class="mt-3">
        <label for="" class="form-label">Email</label>
        <b-form-input
          type="email"
          placeholder="Email"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" class="mt-3">
        <label for="" class="form-label">Password</label>
        <b-form-input
          type="password"
          placeholder="Password"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>
      <center>
        <button
          class="
            text-center
            mt-5
            d-flex
            justify-content-center
            btn btn-primary
            w-100
          "
          style="width: 18rem"
        >
          <span class="mx-1">Login</span>
          <b-icon-arrow-right class="my-auto"></b-icon-arrow-right>
        </button>
      </center>
    </b-form>
    <div class="divider row my-3">
      <b-col class="d-flex my-auto">
        <hr class="hr-text text-primary my-0 w-100" />
        </b-col>
      <b-col cols="2" class="text-center">
        <span>OR</span>
        </b-col>
      <b-col class="d-flex my-auto">
        <hr class="hr-text text-primary my-0 w-100" />
        </b-col>      
    </div>
    <div class="text-center">
      <b-row>
        <b-col md="6">
          <div class="text-center mt-3">
            <b-button
              variant="outline-secondary"
              class="w-100 d-flex justify-items-center justify-content-center"
            >
              <b-icon-github class="my-auto"></b-icon-github>
              <span class="mx-1">github</span>
            </b-button>
          </div>
        </b-col>
        <b-col md="6">
          <div class="text-center mt-3">
            <b-button
              variant="outline-secondary"
              class="d-flex justify-items-center justify-content-center w-100"
            >
              <b-icon-google class="my-auto"></b-icon-google>
              <span class="mx-1">google</span>
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="text-center pt-3">
      Don't have an account? <router-link :to="{ name: 'usr-register' }">Sign Up</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  input{
    min-height: 43px;
  }
</style>