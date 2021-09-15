<template>
  <b-navbar toggleable="md" variant="dark" class="px-5 nav-bg">
    <b-navbar-brand href="#">
      <img
        src="@/assets/temporary-logo.svg"
        alt="Prograchallenges | Logo"
        class="w-50"
        height="w-50"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="border-0">
      <template v-slot:default="{ expanded }" class="text-white">
        <b-icon class="text-white" v-if="expanded" font-scale="1.3" icon="x" />
        <b-icon class="text-white" v-else font-scale="1.3" icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="margin-left: auto">
        <b-nav-item href="#" class="align-self-center">Home</b-nav-item>
        <b-nav-item href="#" class="align-self-center">Challenges</b-nav-item>
        <b-nav-item href="#" class="align-self-center">Support</b-nav-item>
        <b-nav-item href="#" class="align-self-center nav-btn text-center">
          <div class="border px-2 py-1">LOG IN</div>
        </b-nav-item>
        <b-nav-item href="#">
          <div class="text-dark text-center bg-primary px-3 py-1 align-center">
            SIGN UP
            <b-icon-arrow-right-circle-fill />
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
</style>
