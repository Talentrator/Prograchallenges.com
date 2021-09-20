<template>
  <b-navbar toggleable="md" variant="dark" class="text-white px-2 px-md-4">
    <b-navbar-brand :to="{ name: 'tld-home' }">
      <img
        src="@/assets/temporary-logo.svg"
        alt="Prograchallenges | Logo"
        class="w-50"
        height="w-50"
      />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="border-0 shadow-none">
      <template v-slot:default="{ expanded }" class="text-white">
        <b-icon class="text-white" v-if="expanded" font-scale="1.3" icon="x" />
        <b-icon class="text-white" v-else font-scale="1.3" icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="margin-left: auto">
        <b-nav-item href="#" class="align-self-center" :to="{ name: 'tld-home' }"><span class="text-white">Home</span></b-nav-item>
        <b-nav-item href="#" class="align-self-center"><span class="text-white">Challenges</span></b-nav-item>
        <b-nav-item href="#" class="align-self-center"><span class="text-white">Support</span></b-nav-item>
        <b-nav-item href="#" class="align-self-center nav-btn text-center">
          <div class="border px-2 py-1"><span class="text-white">LOG IN</span></div>
        </b-nav-item>
        <b-nav-item :to="{ name: 'usr-register' }">
          <div class="text-dark text-center bg-primary px-3 py-1 align-center">
            REGISTER
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

<style scoped></style>
