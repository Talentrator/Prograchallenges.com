<template>
    <div class="my-3 px-2">
        <center>
        <h2 class="text-secondary">FREE COURSES BY PROGRACHALLENGES.COM</h2>
        </center>
        <div>
            <center>
            <h4 class="px-2">Free Premium Courses By Proffesional Programmers to help you in your Coding Journey :)</h4>
            </center>
            <hr>
            <center>
            <h4 class="text-primary px-2">Video Lessons, Assignments, Tests and almost everything you need to master the skill </h4>
            </center>
        </div>
        <div class="py-2 px-2 mt-5">
            <center>
            <b-link :to="{ name: 'ethereum' }" class="text-secondary"><h4>Ethereum Development</h4></b-link>
            <p>Learn Solidity, Web3 and create amazing Dapps</p>
            <p>By Shantanu Lamba</p>
            </center>
        </div>
    </div>
</template>
<script>
export default {
    name:"Courses",
}
</script>

