<template>
  <div class="book-item">
    <img class="book-item__img" src="../assets/logo.png" alt="" />
    <div class="book-item__detail">
      <div class="price">￥31.82</div>
      <div class="descr">2021春 金星教育小学教材全解六年级数学下册 RJ人教</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
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
  height: 120px;
}
.book-item__detail .price {
  color: red;
}

.book-item__detail .descr {
  font-size: 14px;
  color: grey;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
