<template>
  <div class="home">
    <h1>Danimal Crossing Resumes</h1>
    <div v-for="student in students">
      <p>
        <router-link :to="`/resume/${student.id}`">{{ student.first_name }} {{ student.last_name }}</router-link>
        <img :src="student.photo_url" :alt="student.first_name">
      </p>
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