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

    <h2>Experience</h2>
      <div>
        <h3>jobtitle {{ experience_item.job_title }} | companyname {{ experience_item.company_name }}</h3>
        enddate {{ experience_item.end }}
        startdate {{ experience_item.start_date }} - 
        enddate {{ experience_item.end_date }}
      </div>


    <h2>Education</h2>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {
        first_name: "Cheddar",
        last_name: "Cheese",
        email: "cheddar@gmail.com",
        phone_number: "1231231234",
        short_bio: "I'm great in macaroni and cheese!",
        linkedin_url: "http://linkedin.com/in/cheddar",
        twitter_handle: "http://twitter.com/cheddar",
        github_url: "http://github/com/cheddar",
        personal_url: "http://cheddar.com/",
        image:
          "https://www.nutritionadvance.com/wp-content/uploads/2018/05/Cheddar-Cheese-101.jpg",
        skills: [{}],
        education: [],
        experience: [],
        capstone: []
      }
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