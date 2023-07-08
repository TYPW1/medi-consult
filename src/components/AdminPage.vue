<template>
  <div>
    <h1>Admin Page</h1>
    <form @submit.prevent="createUser">
      <input type="text" placeholder="New username" v-model="username" />
      <input type="password" placeholder="New password" v-model="password" />
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    createUser() {
      // Here you would normally send a request to the server to create a new user
      alert(`Created user with username: ${this.username} and password: ${this.password}`)
      this.username = ''
      this.password = ''
    },
  },
};
</script>
