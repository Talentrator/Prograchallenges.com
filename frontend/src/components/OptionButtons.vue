<template>
    <b-row>
          <b-col><b-button variant="primary" block class="mt-2">RANDOM</b-button></b-col>
          <b-col class="mt-3">or</b-col>
          <b-col>
            <b-dropdown id="dropdown-1" text="Language" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col>
            <b-dropdown id="dropdown-1" text="Difficulty" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col>
            <b-dropdown id="dropdown-1" text="Sort By" class="m-md-2 mt-1">
              <b-dropdown-item>First Action</b-dropdown-item>
              <b-dropdown-item>Second Action</b-dropdown-item>
              <b-dropdown-item>Third Action</b-dropdown-item>
            </b-dropdown>
          </b-col>
        </b-row>
</template>

<script>
export default {
    name:'OptionsButton'
}
</script>