<template>
  <div class="pt-3 pb-3">
    <b-container>
      <h1 class="text-center text-white">Meet The Team</h1>
      <p class="text-muted text-center mb-3">Check out our lead developers</p>

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
          name: "Member Name 1",
          image:
            "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          role: "Role",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Member Name 2",
          image:
            "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          role: "Role",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Member Name 3",
          image:
            "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          role: "Role",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Member Name 4",
          image:
            "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          role: "Role",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Member Name 5",
          image:
            "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          role: "Role",
          bio:
            "Hi I am a developer working on this project lorem ipsum dolor sit amet.",
          contact: {
            email: "abc123@gmail.com",
            telegram: "tg-username",
          },
        },
        {
          name: "Member Name 6",
          image:
            "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          role: "Role",
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