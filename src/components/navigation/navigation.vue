<template>
  <div class="container">
    <nav class="navbar navbar-light bg-light justify-content-between">
      <form class="form-inline">
        <router-link to="/book">list book</router-link>
        <router-link to="/book/create">create book</router-link>
      </form>
      <button @click="logout" class="btn btn-primary">logout</button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$cookies.remove("token");
      this.$router.push("/");
    },
  },
};
</script>