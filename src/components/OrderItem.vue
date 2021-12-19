<template>
  <div class="order-item">
    <div class="order-item__image">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="order-item__detail">
      <div class="order-item__col">
        <p>书名</p>
        <p>哈利波特</p>
      </div>
      <div class="order-item__col">
        <p>作者</p>
        <p>雷军</p>
      </div>
      <div class="order-item__col">
        <p>价格</p>
        <p>￥25</p>
      </div>
      <div class="order-item__col">
        <p>简介</p>
        <p>xxxxxxxxxxxx</p>
      </div>
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
.order-item {
  display: flex;
  width: 100%;
  border-bottom: 0.5px solid rgb(202, 201, 201);
  margin-left: 100px;
}
.order-item__image {
  width: 25%;
}
.order-item__image >>> img {
  width: 60%;
  height: 80%;
}
.order-item__detail {
  width: 65%;
}
.order-item__col {
  display: flex;
  margin-bottom: 20px;
}
.order-item__col p {
  width: 100px;
}
</style>
