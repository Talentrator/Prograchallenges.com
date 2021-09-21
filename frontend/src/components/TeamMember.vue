<template>
  <div class="card border text-white">
      <img class="card-img-top" :src="member.image" :alt="`${member.name} Picture`">
      <div class="card-body">
      <h4>{{member.name}}</h4>
      <h6 class="text-muted">{{member.role}}</h6>
      <p>{{member.bio}}</p>
      <p><a :href="`mailto:${member.contact.email}`">{{member.contact.email}}</a></p>
      <p><a :href="`https://t.me${member.contact.telegram}`">{{member.contact.telegram}}</a></p>
      </div>
  </div>
</template>

<style scoped>
.card{
    padding: 0;
    background: none;
    width: min-content;
}
.card-img-top{
    width: 43vw;
    max-width: 24rem;
    height: 55vw;
    max-height: 30rem;
}

.card-body{
    padding: 2rem;
}

@media (max-width: 768px){
    .card-img-top{
        height: 15rem;
    }
}
</style>

<script>
export default {
    name:'Member',
    props:{member:{
        type:Object
    }}
}
</script>