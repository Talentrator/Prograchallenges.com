<template>
  <b-navbar toggleable="md" variant="dark" class="text-white px-xl-3 px-1">
    <b-navbar-brand :to="{ name: 'tld-home' }">
      <b-img :src="require('../assets/logos/logo.svg')" style="max-height:3.5rem"></b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="border-0 shadow-none">
      <template v-slot:default="{ expanded }" class="text-white">
        <b-icon class="text-white" v-if="expanded" font-scale="1.3" icon="x" />
        <b-icon class="text-white" v-else font-scale="1.3" icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="margin-left: auto">
        <b-nav-item :to="{ name: 'tld-home' }" class="align-self-center"><span class="text-white">Home</span></b-nav-item>
        <b-nav-item :to="{ name: 'challenges' }" class="align-self-center"><span class="text-white">Challenges</span></b-nav-item>
        <b-nav-item :to="{ name: 'usr-coming-soon' }" class="align-self-center"><span class="text-white">Support</span></b-nav-item>
        <b-nav-item :to="{ name: 'usr-coming-soon' }" class="align-self-center"><span class="text-white">Courses</span></b-nav-item>
        <b-nav-item :to="{ name: 'usr-login' }" class="align-self-center nav-btn text-center">
          <b-button variant="outline-light" size="sm">LOG IN</b-button>
        </b-nav-item>
        <b-nav-item :to="{name:'usr-register'}" class="ps-2 ps-md-0">
          <b-button variant="primary" size="sm">
            SIGN UP
            <b-icon-arrow-right-circle-fill />
          </b-button>
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

