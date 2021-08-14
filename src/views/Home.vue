<template>
  <div class="home">
    <h1>Student Portal</h1>
    <p> {{ students }} </p>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  export default {
  data: function () {
    return {
      students: [],
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents: function () {
      console.log("index")
      axios.get("https://api.hatchways.io/assessment/students").then((response) => {
        console.log("students index", response);
        this.students = response.data;
      });
    },
  },
};
</script>