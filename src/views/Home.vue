<template>
  <div class="home">

    <h1>Danimal Crossing Resumes</h1>
    <div v-for="student in students">
      <p>
        <router-link :to="`/resume/${student.id}`">{{ student.first_name }} {{ student.last_name }}</router-link>
        <img :src="student.photo_url" :alt="student.first_name">
      </p>
    </div>

    <!-- Team-->
      <section class="page-section bg-light" id="team">
          <div class="container">
              <!-- Heading Text-->
              <div class="text-center">
                  <h2 class="section-heading text-uppercase">Actualize Alumni</h2>
                  <h3 class="section-subheading text-muted">Bootcamp Graduates</h3>
              </div>
              <!-- Team Members-->
              <div class="row">
                  <div class="col-lg-4">
                      <div class="team-member">
                          <img class="mx-auto rounded-circle" src="/assets/img/team/1.jpg" alt="" />
                          <h4>Kay Garland</h4>
                          <p class="text-muted">Lead Designer</p>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="team-member">
                          <img class="mx-auto rounded-circle" src="/assets/img/team/2.jpg" alt="" />
                          <h4>Larry Parker</h4>
                          <p class="text-muted">Lead Marketer</p>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
                  <div class="col-lg-4">
                      <div class="team-member">
                          <img class="mx-auto rounded-circle" src="/assets/img/team/3.jpg" alt="" />
                          <h4>Diana Petersen</h4>
                          <p class="text-muted">Lead Developer</p>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                          <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
              </div>
          </div>
      </section>

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
        {
          id: 2,
          first_name: "Hubert",
          last_name: "Shon",
        },
        {
          id: 1,
          first_name: "Irving",
          last_name: "Villaseñor",
        },
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