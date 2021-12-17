<template>
  <div class="search-book-item">
    <img class="book-item__img" :src="imgUrl" />
    <div class="introduction">
      <h2>{{ bookName }}</h2>
      <p>{{ author }}/{{ publishingHouse }}/{{ yearOfPublication }}/{{ originalPrice }}</p>
      <p>{{ label }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBookItem",
  props: {
    bookName: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    publishingHouse: {
      type: String,
      default: "",
    },
    originalPrice: {
      type: String,
      default: "",
    },
    yearOfPublication: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    imgUrl: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.search-book-item {
  display: flex;
  flex-direction: row;
  margin-left: 20vw;
  margin-top: 30px;
}
.book-item__img {
  width: 130px;
  height: 150px;
}
.introduction {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h2 {
  margin-left: 2vw;
}
p {
  margin-left: 2vw;
}
</style>
