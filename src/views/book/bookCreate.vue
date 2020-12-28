<template>
  <div class="container">
    <navigation />
    <div class="book-form">
      <div class="row">
        <div class="col-md-3">
          <h3>Create book</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="title">title</label>
            <input
              class="form-control"
              type="text"
              name="title"
              id="title"
              v-model="book.title"
              placeholder="title book"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="description">description</label>
            <input
              class="form-control"
              type="text"
              name="description"
              id="description"
              v-model="book.description"
              placeholder="description"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" @click="registerBook">submit</button>
  </div>
</template>

<script>
import axios from "axios";
import navigation from "../../components/navigation/navigation.vue";

export default {
  name: "bookCreate",
  components: {
    navigation,
  },
  data() {
    return {
      book: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    registerBook() {
      axios
        .post(
          "http://192.168.1.175:3000/api/v1/book",
          {
            title: this.book.title,
            description: this.book.description,
          },
          {
            headers: {
              Authorization: this.$cookies.get("token"),
            },
          }
        )
        .then(() => {
          this.$router.push("/book");
        })
        .catch((err) => {
          alert(err.response.data.errors[0].message);
        });
    },
  },
};
</script>