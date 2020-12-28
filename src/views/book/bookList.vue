<template>
  <div class="container">
    <navigation />
    <div class="book-list">
      <div class="row">
        <div class="col-md-3">
          <h3>Book list</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="book in books"
                :key="(book.id, book.title, book.description)"
              >
                <td scope="row">{{ book.id }}</td>
                <td>
                  <router-link
                    :to="{
                      path: '/book/read/' + book.id,
                      params: { id: book.id },
                    }"
                    >{{ book.title }}</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navigation from "../../components/navigation/navigation.vue";

export default {
  components: {
    navigation,
  },
  data() {
    return {
      books: null,
    };
  },
  created: function () {
    axios
      .get("http://192.168.1.175:3000/api/v1/book", {
        headers: {
          Authorization: this.$cookies.get("token"),
        },
      })
      .then((response) => {
        this.books = response.data.book;
      })
      .catch((err) => {
        alert(err.response.data.errors[0].message);
      });
  },
  methods: {},
};
</script>