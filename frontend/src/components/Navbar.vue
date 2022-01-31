<template>
  <b-navbar toggleable="md" variant="dark" class="text-white px-xl-3 px-1">
    <b-navbar-brand :to="{ name: 'tld-home' }">
      <b-img
        :src="require('../assets/logos/logo.svg')"
        style="max-height: 3.5rem">
      </b-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" class="border-0 shadow-none">
      <template v-slot:default="{ expanded }" class="text-white">
        <b-icon class="text-white" v-if="expanded" font-scale="1.3" icon="x" />
        <b-icon class="text-white" v-else font-scale="1.3" icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="margin-left: auto">
        <b-nav-item :to="{ name: 'tld-home' }" class="align-self-center">
          <span class="text-white">Home</span>
        </b-nav-item>
        <b-nav-item :to="{ name: 'challenges' }" class="align-self-center">
          <span class="text-white">Challenges</span>
        </b-nav-item>
        <b-nav-item :to="{ name: 'usr-coming-soon' }" class="align-self-center">
          <span class="text-white">Support</span>
        </b-nav-item>
        <b-nav-item :to="{ name: 'usr-coming-soon' }" class="align-self-center">
          <span class="text-white">Courses</span>
        </b-nav-item>
        <span class="d-flex" v-if="!userLoggedIn">
          <b-nav-item
            :to="{ name: 'usr-login' }"
            class="align-self-center nav-btn text-center">
            <b-button variant="outline-light" size="sm">LOG IN</b-button>
          </b-nav-item>
          <b-nav-item :to="{ name: 'usr-register' }" class="ps-2 ps-md-0">
            <b-button variant="primary" size="sm">
              SIGN UP
              <b-icon-arrow-right-circle-fill />
            </b-button>
          </b-nav-item>
        </span>

        <b-navbar-nav
          v-else-if="userLoggedIn && !!firstName"
          class="align-self-center mt-2 mt-md-0">
          <b-nav-item-dropdown
            :text="'Hey, ' + firstName"
            left
            toggle-class="text-white ps-3"
            class="me-1">
            <b-dropdown-item to="#" @click.prevent="logOut">
              Logout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import "firebase/auth";

import AuthMixin from "@/mixins/AuthMixin";
export default {
  name: "Navbar",
  mixins: [AuthMixin],
};
</script>


<style lang="scss">
.nav-item {
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none !important;
    }
    &:active,
    &:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }
  }
}
</style>