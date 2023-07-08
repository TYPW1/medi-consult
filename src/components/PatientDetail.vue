<template>
    <div>
      <h1>Patient Detail</h1>
      <p>Name: {{ patient.name }}</p>
      <p>Age: {{ patient.age }}</p>
      <!-- Add more patient details here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PatientDetail',
    props: ['id'],
    data() {
      return {
        patients: [
          { id: 1, name: 'Patient 1', age: 30 },
          { id: 2, name: 'Patient 2', age: 40 },
          // Add more patients here
        ],
      };
    },
    computed: {
      patient() {
        return this.patients.find(patient => patient.id === Number(this.id))
      },
    },
  };
  </script>
  