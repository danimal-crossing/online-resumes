<template>
  <div class="resume">
    <img :src="student.image" :alt="student.first_name">
    <h1>firstname{{ student.first_name }} lastname {{ student.last_name }}</h1>
    <p>
      email {{ student.email}} |
      phone {{ student.phone_number }} |
      linkedin {{ student.linkedin_url }} |
      githuburl {{ student.github_url}} |
      twitter {{ student.twitter_handle }} |
      personalblog {{ student.personal_url }}
    </p>
    <h3>shortbio {{ student.short_bio }}</h3>

    <h2>Skills</h2>
      <div v-for="skill in student.skills">
        Skill {{ skill.name }}
      </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {}
    };
  },
  created: function() {
    axios.get(`/api/students/${this.$route.params.id}`).then(response => {
      this.student = response.data;
    });
  },
  methods: {}
};
</script>