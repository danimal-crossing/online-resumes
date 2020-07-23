<template>
  <div class="home">


    <!-- Team-->
        <div class="container">
            <!-- Heading Text-->
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Actualize Alumni</h2>
                <h3 class="section-subheading text-muted">Bootcamp Graduates</h3>
            </div>
            <!-- Team Members-->
            <div class="row">
              <!-- Loop for students index -->
              <div v-for="student in students">
                <div class="col-lg-4">
                    <div class="team-member">
                        <router-link @click.native="$scrollToTop" :to="`/resume/${student.id}`"><img class="mx-auto rounded-circle" :src="student.photo_url" :alt="student.first_name" />
                        <h4>{{ student.first_name }} {{ student.last_name }}</h4></router-link>
                        <p class="text-muted">Web Developer</p>
                        <a class="btn btn-dark btn-social mx-2" :href="`https://twitter.com/${student.twitter_handle.substring(1)}`"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" :href="`${student.linkedin_url}`"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
              </div>
            </div>
        </div>

  </div>

</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      students: [
        // {
        //   id: 2,
        //   first_name: "Hubert",
        //   last_name: "Shon",
        //   photo_url: "/assets/img/team/1.jpg",
        // },
        // {
        //   id: 1,
        //   first_name: "Irving",
        //   last_name: "Villaseñor",
        //   photo_url: "/assets/img/team/2.jpg",
        // },
        // {
        //   id: 1,
        //   first_name: "Irving",
        //   last_name: "Villaseñor",
        //   photo_url: "/assets/img/team/2.jpg",
        // },
        // {
        //   id: 1,
        //   first_name: "Irving",
        //   last_name: "Villaseñor",
        //   photo_url: "/assets/img/team/2.jpg",
        // },
        // {
        //   id: 1,
        //   first_name: "Irving",
        //   last_name: "Villaseñor",
        //   photo_url: "/assets/img/team/2.jpg",
        // },
        // {
        //   id: 1,
        //   first_name: "Irving",
        //   last_name: "Villaseñor",
        //   photo_url: "/assets/img/team/2.jpg",
        // },
      ],
    };
  },
  created: function () {
    axios.get("/api/students").then((response) => {
      this.students = response.data;
    });
  },
  methods: {},
};
</script>