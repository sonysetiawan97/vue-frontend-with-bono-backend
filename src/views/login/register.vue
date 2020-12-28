<template>
  <div class="container">
    <div class="login-form">
      <div class="row">
        <h3>register</h3>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              autocomplete="off"
              v-model="user.email"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="user.password"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <button type="submit" class="btn btn-primary" @click="register">
            Submit
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <router-link to="/">just login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "register",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      axios
        .post("http://192.168.1.175:3000/api/user/v1/register", {
          email: this.user.email,
          password: this.user.password,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          alert(err.response.data.errors[0].message);
        });
    },
  },
};
</script>