<template>
    <div>
      <h1>Consultation Notes</h1>
      <textarea v-model="notes"></textarea>
      <button @click="saveNotes">Save Notes</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConsultationNotes',
    data() {
      return {
        notes: '',
      };
    },
    methods: {
      saveNotes() {
        // Save notes logic here
        console.log('Notes: ', this.notes);
      },
    },
  };
  </script>
  