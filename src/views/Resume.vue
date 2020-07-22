<template>
  <div class="resume">
    <img :src="student.image" :alt="student.first_name">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <p>
      {{ student.email}} |
      {{ student.phone_number }} |
      {{ student.linkedin_url }} |
      {{ student.github_url}} |
      {{ student.twitter_handle }} |
      {{ student.personal_url }}
    </p>
    <h3>{{ student.short_bio }}</h3>

    <h2>Skills</h2>
    <div v-for="skill in student.skills">
      Skill {{ skill.name }}
    </div>

    <h2>Capstone</h2>
    <!-- <div v-for="capstone_item in student.capstone"> -->
    <div>
      <h4>name | url</h4>
      <p>description</p>
      <!-- <h4>{{ capstone_item.name }} | {{ capstone_item.url }}</h4>
      <p>{{ capstone_item.description }}</p> -->
      <img :src="capstone_item.screenshot" :alt="capstone_item.name">
    </div>

    <h2>Experience</h2>
    <!-- <div v-for="experience_item in student.experience"> -->
    <div>
      <h4>jobtitle | companyname | startdate - enddate</h4>
      <p>details</p>
      <!-- <h4>{{ experience_item.job_title }} | {{ experience_item.company_name }} | 
      {{ experience_item.start_date }} - 
      {{ experience_item.end_date }} </h4>
      <p>{{ experience_item.details }}</p> -->
    </div>


    <h2>Education</h2>
    <!-- <div v-for="education_item in student.education"> -->
    <div>
      <h4>degree | universityname | startdate - enddate</h4>
      <p>details</p>
      <!-- <h4>{{ experience_item.degree }} | {{ experience_item.university_name }} | 
      {{ experience_item.start_date }} - 
      {{ experience_item.end_date }} </h4>
      <p>{{ experience_item.details }}</p> -->
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