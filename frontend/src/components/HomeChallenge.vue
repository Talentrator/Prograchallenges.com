<template>
  <div class="mx-1 mx-md-5 p-1 p-md-2 text-white border border-primary d-flex justify-content-between align-items-center">
    <div>
      <h5>{{item.title}}</h5>
      <p class="m-0">by {{item.nickname}}</p>
    </div>
    <router-link :to="`/challenge/${item.id}`">
        <b-button variant="primary" class="p-1 p-md-2">attempt</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'HomeChallenge',
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style scoped>

</style>