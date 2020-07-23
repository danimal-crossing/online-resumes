<template>
  <div class="resume">
    <img class="student-image" :src="student.photo_url" :alt="student.first_name">
    <h1>{{ student.first_name }} {{ student.last_name }}</h1>
    <p>
      {{ student.email }} |
      {{ student.phone_number }} |
      {{ student.linkedin_url }} |
      {{ student.github_url}} |
      {{ student.twitter_handle }} |
      {{ student.website_url }}
    </p>
    <h6>{{ student.bio }}</h6>

    <h2>Skills</h2>
    <div v-for="skill in student.skills">
      {{ skill.name }}
    </div>

    <h2>Capstone</h2>
    <div v-for="capstone in student.capstones">
      <h5>{{ capstone.name }} | {{ capstone.url }}</h5>
      <p>{{ capstone.description }}</p>
      <img class="student-image" v-if="capstone.screenshot_url" :src="capstone.screenshot_url" :alt="capstone.name">
    </div>

    <h2>Experience</h2>
    <div v-for="experience in student.experiences">
      <h5>{{ experience.job_title }} | {{ experience.company_name }} | 
      {{ experience.start_date }} - 
      {{ experience.end_date }} </h5>
      <p>{{ experience.details }}</p>
    </div>


    <h2>Education</h2>
    <div v-for="education in student.educations">
      <h5>{{ education.degree }} | {{ education.university_name }} | 
      {{ education.start_date }} - 
      {{ education.end_date }} </h5>
      <p>{{ education.details }}</p>
    </div>

    <h2>Twitter Feed</h2>
    <div class="twitter-feed">
      <twitter>
        <a class="twitter-timeline" :href="`https://twitter.com/${student.twitter_handle.substring(1)}?ref_src=twsrc%5Etfw`" data-tweet-limit="3">Tweets by {{student.twitter_handle}}</a>
      </twitter>
    </div>

  </div>
</template>

<style>
.student-image {
  height: 200px;
}

.capstone-image {
  width: 200px;
  height: 200px;
}

.twitter-feed {
  width: 300px;
}
</style>

<script>
import axios from "axios";
import twitter from "vue-twitter";
export default {
  data: function () {
    return {
      student: {
        // first_name: "Cheddar",
        // last_name: "Cheese",
        // email: "cheddar@gmail.com",
        // phone_number: "1231231234",
        // bio: "I'm great in macaroni and cheese!",
        // linkedin_url: "http://linkedin.com/in/cheddar",
        // twitter_handle: "kraftcheese",
        // github_url: "http://github.com/cheddar",
        // website_url: "http://cheddar.com/",
        // photo_url:
        //   "https://www.nutritionadvance.com/wp-content/uploads/2018/05/Cheddar-Cheese-101.jpg",
        // skills: [
        //   { name: "Ruby" },
        //   { name: "Rails" },
        //   { name: "HTML" },
        //   { name: "react" },
        // ],
        // educations: [
        //   {
        //     start_date: "Jan. 1, 2019",
        //     end_date: "Feb. 22, 2019",
        //     degree: "Associates",
        //     university_name: "Community Cheese College",
        //     details: "Studied development of cheese",
        //   },
        //   {
        //     start_date: "2019-03-01",
        //     end_date: "2019-03-22",
        //     degree: "Bachelors",
        //     university_name: "Cheese College",
        //     details: "Studied development of cheese",
        //   },
        //   {
        //     start_date: "2019-05-01",
        //     end_date: "2019-07-22",
        //     degree: "Masters",
        //     university_name: "Cheese University",
        //     details: "Master Cheese",
        //   },
        // ],
        // experiences: [
        //   {
        //     start_date: "2019-08-08",
        //     end_date: "2019-09-22",
        //     job_title: "Cheese Developer",
        //     company_name: "Oberwise",
        //     details: "Milked cows",
        //   },
        //   {
        //     start_date: "2019-11-22",
        //     end_date: "2019-12-22",
        //     job_title: "Cheese Developer",
        //     company_name: "Dean's Dairy Farm",
        //     details: "Formed cheese",
        //   },
        //   {
        //     start_date: "2019-01-22",
        //     end_date: "2020-01-22",
        //     job_title: "Cheese Engineer",
        //     company_name: "Horizon",
        //     details: "Managed cheese makers",
        //   },
        // ],
        // capstones: [
        //   {
        //     name: "Local Cheese App",
        //     description: "find local cheese sources based on your location",
        //     url: "http://wheredacheeseat.com",
        //     screenshot_url:
        //       "https://www.nutritionadvance.com/wp-content/uploads/2018/05/Cheddar-Cheese-101.jpg",
        //   },
        //   {
        //     name: "Say Cheese",
        //     description: "Cheese filters for cameras",
        //     url: "http://saycheese.com",
        //   },
        // ],
      },
    };
  },
  created: function () {
    axios.get(`/api/students/${this.$route.params.id}`).then((response) => {
      this.student = response.data;
    });
  },
  mounted: function () {
    window.scrollTo(0, 400);
  },
  methods: {},
};
</script>