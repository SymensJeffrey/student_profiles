<template>
  <div class="home">
    <div v-for="student in students" v-bind:key="student.id">
      <p><img v-bind:src="student.pic"/></p>
      <h3>{{ student.firstName }} {{ student.lastName}}</h3>
      <p>{{ student.email }}</p>
      <p>{{ student.company }}</p>
      <p>{{ student.skill }}</p>
      <p>{{ student.average }}</p>
      <hr />
    </div>
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
      axios.get("https://api.hatchways.io/assessment/students").then((response) => {
        console.log("students index", response.data);
        this.students = response.data.students;
        
        for (let i = 0; i < 8; i++){
         response.data.students[i].grades = response.data.students[i].grades.map(Number)
         var grades = response.data.students[i].grades = response.data.students[i].grades.map(Number)
         var sum = grades.reduce((previous, current) => current += previous);

         var studentAverage = {}
         studentAverage.id = "average";
         studentAverage.quantity = sum / grades.length;
         console.log(response.data.students[i].average = (sum / grades.length))
        }

        console.log(response.data.students)
      });
    },
  },
};
</script>