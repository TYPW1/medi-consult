<template>
    <div>
      <h1>Patient List</h1>
      <ul>
        <li v-for="patient in patients" :key="patient.id">
          <router-link :to="`/patient/${patient.id}`">{{ patient.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PatientList',
    data() {
      return {
        patients: [
          { id: 1, name: 'Patient 1' },
          { id: 2, name: 'Patient 2' },
          // Add more patients here
        ],
      };
    },
  };
  </script>
  