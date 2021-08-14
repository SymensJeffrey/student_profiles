<template>
  <div class="home">
    <hr />
    <div v-for="student in students" v-bind:key="student.id">
      <div>
      <img id="left" v-bind:src="student.pic"/>
      <h1>{{ student.firstName }} {{ student.lastName}}</h1>
        <div>
          <p>Email: {{ student.email }}</p>
          <p>Company: {{ student.company }}</p>
          <p>Skill: {{ student.skill }}</p>
          <p>Average: {{ student.average }}%</p>
          <br>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

h1 {
  font-weight: 800;
}
body{
  font-family: 'Raleway', sans-serif;
}

hr {
  color:rgb(163, 163, 163);
}

body img{
  width: 200px;
  border: 1px solid;
  border-color: rgb(163, 163, 163);
  border-radius: 50%;
  margin-right: 3em;
}

#left{
  float: left
}
</style>

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
         (response.data.students[i].average = (sum / grades.length))
        }

        console.log(response.data.students)
      });
    },
  },
};
</script>