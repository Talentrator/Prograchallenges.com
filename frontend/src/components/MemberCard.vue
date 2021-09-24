<template>
  <div class="card p-0 bg-transparent border text-white">
    <img
      class="card-img-top"
      :src="require(`@/assets/${member.image}`)"
      :alt="`${member.name} Picture`"
    />
    <div class="card-body p-2">
      <h4>{{ member.name }}</h4>
      <h6 class="text-muted">{{ member.role }}</h6>
      <p>{{ member.bio }}</p>
      <p>
        <a target="_blank" :href="`mailto:${member.contact.email}`">{{
          member.contact.email
        }}</a>
      </p>
      <p>
        <a target="_blank" :href="`https://telegram.me/${member.contact.telegram}`">
        @{{
          member.contact.telegram
        }}</a>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "MemberCard",
  props: {
    member: {
      type: Object,
    },
  },
};
</script>

<style scoped>
    .card {
        width: min-content;
    }

    .card-img-top {
        width: 43vw;
        max-width: 24rem;
        height: 55vw;
        max-height: 30rem;
    }

    @media (max-width: 768px) {
        .card-img-top {
            width: 80vw;
            max-width: 30rem;
            height: 50vw;
            max-height: 40rem;
        }
    }
</style>
