<template>
  <div class="book-item">
    <img class="book-item__img" :src="imgUrl" />
    <div class="book-item__detail">
      <div class="descr">{{ bookName }}</div>
      <div class="price">作者：{{ author }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'BaseBookItem',
  props: {
    bookName: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    },

  },
  setup() {
    return {
    }
  },
});
</script>

<style scoped>
.book-item {
  display: inline-block;
  box-sizing: border-box;
  width: 150px;
  height: 200px;
  cursor: pointer;
}
.book-item__detail {
  display: flex;
  flex-direction: column;
}
.book-item__img {
  width: 100%;
  height: 170px;
}
.book-item__detail .price {
  font-size: small;
}

.book-item__detail .descr {
  font-size: 14px;
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 10px;
}
</style>
