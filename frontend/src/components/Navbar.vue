<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="px-5 nav-bg">
      <b-navbar-brand href="#">
        <img
          src="../assets/temporary-logo.svg"
          alt="Prograchallenges | Logo"
          class="w-50"
          height="w-50"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav style="margin-left: auto;">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Challenges</b-nav-item>
          <b-nav-item href="#">Support</b-nav-item>
          <b-nav-item href="#" class="nav-btn text-center mx-2">
            Login
          </b-nav-item>
          <b-nav-item href="#" class="nav-btn nav-btn-signup text-center mx-2">
            SignUp
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.nav-bg {
  background-color: #151515;
}

.nav-btn {
  border: 1px solid white;
  width: 100px;
}

.nav-btn-signup {
  border: none;
}

.nav-btn-signup > a {
  background-color: #dbb880;
  color: #151515 !important;
  font-weight: 700;
}
</style>
