<template>
  <div class="pt-3 pb-3 mt-md-2 pb-md-5">
    <b-container>
      <h1 class="text-center text-white ">Meet The Team</h1>
      <p class="text-muted text-center mb-2 mb-md-4">Check out our lead developers</p>

      <b-row class="justify-content-md-between flex-md-row align-items-center flex-column">
        <MemberCard
          v-for="(member, idx) in members"
          :key="idx"
          :member="member"
        />
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
          image:
            "shantanu.jpg",
          role: "EXECUTIVE, COMMUNITY LEADER",
          bio:
            "Hello, I am a programmer working on this project. I live in New Delhi, India",
          contact: {
            email: "sl.group958@gmail.com",
            telegram: "santy_coderx",
          },
        },
        {
          name: "Aman",
          image:
            "logo.svg",
          role: "HEAD OF PRODUCT",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "calle978",
          },
        },
        {
          name: "Saransh Kawadkar",
          image:
            "logo.svg",
          role: "HEAD OF DESIGN",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "@SarK283",
          },
        },
        {
          name: "Maximilian Wittmer",
          image:
            "maximillian.jpg",
          role: "PROJECT OWNER/SPONSOR",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Calle Unnérus",
          image:
            "calle.jpg",
          role: "PROJECT OWNER/SPONSOR",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Chris",
          image:
            "logo.svg",
          role: "Chief Of Conduct",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
    .row {
        row-gap: 2rem;
        column-gap: 1rem;
    }
</style>
