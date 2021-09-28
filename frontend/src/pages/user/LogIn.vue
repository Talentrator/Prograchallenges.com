
<template>
  <div class="text-light px-3 pt-2 mx-auto mb-md-5 mb-3 border border-primary pb-3 ">
    <h1
      class="text-center my-2 display-4 text-light"
    >
      LOG IN
    </h1>
    <b-form class="border-bottom border-primary pb-3">
      <b-form-group id="input-group-2" class="mt-3">
        <b-form-input
          id="input-2"
          type="text"
          placeholder="Username"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" class="mt-3">
        <b-form-input
          id="input-3"
          type="password"
          placeholder="Password"
          required
          class="input-width bg-light"
          style="border: none"
        ></b-form-input>
      </b-form-group>
      <center>
        <div
          class="text-center mt-3 d-flex justify-content-center btn btn-primary"
          style="width:10rem;"
        >
          <a href="#" class="text-dark mx-1">Login</a>
          <b-icon-arrow-right-square-fill
            class="my-auto"
          ></b-icon-arrow-right-square-fill>
        </div>
      </center>
    </b-form>
    <div
      class="text-center mt-3 d-flex justify-content-center btn btn-secondary"
      style="width:18rem;"
    >
      <b-icon-github class="my-auto"></b-icon-github>
      <a href="#" class="text-dark mx-1">Login with github</a>
    </div>
    <div
      class="text-center mt-3 d-flex justify-content-center btn btn-secondary"
      style="width:18rem;"
    >
      <b-icon-google class="my-auto"></b-icon-google>
      <a href="#" class="text-dark mx-1">Login with google</a>
    </div>
  </div>
</template>
<style scoped>
.input-width {
  width: 40rem;
}
@media (max-width: 768px) {
  .input-width {
    width: 18rem;
  }
}
</style>
