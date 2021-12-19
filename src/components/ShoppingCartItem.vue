<template>
  <div class="ShoppingItemStyle">
    <!-- 全选框 -->
    <div class="selected">全选框</div>
    <!-- 图书的图片 -->
    <img class="book-item__img" src="../assets/user.png" />
    <!-- 图书信息 -->
    <div class="introduction">
      <h2>作者</h2>
      <p>简介1111111111111111111111111111111111111</p>
    </div>
    <!-- 数量 -->
    <div class="amount">数量</div>
    <!-- 金额 -->
    <div class="price">金额</div>
    <!-- 操作 -->
    <div class="price">操作</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Input } from 'ant-design-vue'
import { SearchBook } from '../controllers/homepage';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "SearchBox",
  components: {
    'a-input': Input,
    'a-input-search': Input.Search
  },
  setup() {


    return {

    };
  },
});
</script>

<style scoped>
.ShoppingItemStyle {
  display: flex;
  flex-direction: row;
  margin-left: 20vw;
  margin-top: 30px;
  cursor: pointer;
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
.TagStyle {
  margin-left: 2vw;
}
.price {
  margin: 50px;
}
.price {
  margin: 50px;
}
.amount {
  margin: 50px;
}
.selected {
  margin: 50px 20px;
}
</style>
