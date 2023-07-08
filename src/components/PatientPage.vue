<template>
    <div class="patient-page">
      <button class="toggle-button" @click="showSidebar = !showSidebar">
        <font-awesome-icon icon="bars" />
      </button>
      <div class="sidebar" v-if="showSidebar">
        <PatientDetail :id="id" />
      </div>
      <div class="main">
        <ConsultationNotes />
      </div>
    </div>
  </template>
  
  <script>
  import PatientDetail from './PatientDetail.vue'
  import ConsultationNotes from './ConsultationNotes.vue'
  
  export default {
    name: 'PatientPage',
    components: {
      PatientDetail,
      ConsultationNotes,
    },
    props: ['id'],
    data() {
      return {
        showSidebar: true,
      };
    },
  };
  </script>
  
  <style scoped>
  .patient-page {
    display: flex;
    position: relative;
  }
  
  .sidebar {
    width: 25%;
    border-right: 1px solid #ccc;
    padding: 1em;
  }
  
  .main {
    width: 75%;
    padding: 1em;
  }
  
  .toggle-button {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5em;
    font-size: 1.5em;
    background: none;
    border: none;
    z-index: 1;
  }
  </style>
  