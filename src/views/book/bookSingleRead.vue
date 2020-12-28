<template>
  <div class="container">
    <p>{{ book.description }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      book: Object,
    };
  },
  created() {
    axios
      .get(
        "http://192.168.1.175:3000/api/v1/book/read/" + this.$route.params.id,
        {
          headers: {
            Authorization: this.$cookies.get("token"),
          },
        }
      )
      .then((response) => {
        this.book = response.data.book;
      })
      .catch((err) => {
        alert(err.response.data.errors[0].message);
      });
  },
};
</script>