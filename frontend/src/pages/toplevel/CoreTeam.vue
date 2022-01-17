<template>
  <div class="pt-3 pb-3 mt-md-2 pb-md-5">
    <b-container fluid="md">
      <h1 class="text-center text-white">Meet The Team</h1>
      <p class="text-muted text-center mb-2 mb-md-4">
        Check out our lead developers
      </p>
      <b-row class="">
        <div class="col-sm-6 col-md-4 mb-3" v-for="(member, idx) in members" :key="idx">
          <MemberCard :member="member" class="h-100" />
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MemberCard from "@/components/MemberCard.vue";
export default {
  name: "CoreTeam",
  components: { MemberCard },
  data() {
    return {
      members: [
        {
          name: "Shantanu Lamba",
          image: "shantanu.jpeg",
          role: "EXECUTIVE, COMMUNITY LEADER",
          bio: "Hello, I am a programmer working on this project. I live in New Delhi, India",
          contact: {
            email: "sl.group958@gmail.com",
            telegram: "santy_coderx",
          },
        },
        {
          name: "James Muriithi",
          image: "james.jpg",
          role: "PROJECT LEAD",
          bio: "Hello, I am a programmer working on this project.",
          contact: {
            email: "muriithijames123@gmail.com",
            telegram: "Jam_es",
          },
        },
        {
          name: "Md Aman Khan",
          image: "aman.jpg",
          role: "HEAD OF PRODUCT",
          bio: "Hi I am a developer working on this project",
          contact: {
            email: "khanamankhan1973@gmail.com",
            telegram: "Aman_coder",
          },
        },
        {
          name: "Saransh Kawadkar",
          image: "logos/logo.svg",
          role: "HEAD OF DESIGN",
          bio: "Hi I am a developer working on this project",
          contact: {
            email: "saranshmm@gmail.com",
            telegram: "SarK283",
          },
        },
        {
          name: "Maximilian Wittmer",
          image: "maximillian.jpg",
          role: "PROJECT OWNER/SPONSOR",
          bio: "Maximilian is CTO at Talentrator. He loves working out solutions to all kinds of problems regarding code",
          contact: {
            email: "maximilian@talentrator.com",
            telegram: "BinaryByter",
          },
        },
        {
          name: "Calle Unnérus",
          image: "calle.jpg",
          role: "PROJECT OWNER/SPONSOR",
          bio: "Hi I am the sponsor of the project",
          contact: {
            email: "calle@talentrator.com",
            telegram: "calle978",
          },
        },
      ],
    };
  },
};
</script>
