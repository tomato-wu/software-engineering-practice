<template>
  <a-row class="CartItemStyle">
    <a-col :span="2" class="itemDetailStyle">
      <!-- 全选框 -->
      <div class="selected">全选框</div>
    </a-col>
    <a-col :span="6" class="itemDetailStyle">
      <!-- 图书的图片 -->
      <img class="book-item__img" :src="imgUrl" />
    </a-col>
    <a-col :span="4" class="itemDetailStyle">
      <!-- 图书信息 -->
      <div class="introduction">
        <h2>{{ bookName }}</h2>
        <span>{{ author }}</span>
        <span>{{ publishingHouse }}</span>
      </div>
    </a-col>
    <a-col :span="4" class="itemDetailStyle">
      <!-- 数量 -->

      <div class="amount">
        <a-input-number id="inputNumber" :value="bookCount" :min="1" :max="10" />
      </div>
    </a-col>
    <a-col :span="4" class="itemDetailStyle">
      <!-- 金额 -->
      <div class="price" style="color:red;">￥{{ originalPrice }}</div>
    </a-col>
    <a-col :span="4" class="itemDetailStyle">
      <!-- 操作 -->
      <div class="price">操作</div>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Input, Row, Col, InputNumber } from 'ant-design-vue'
import { SearchBook } from '../controllers/homepage';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "SearchBox",
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
    bookCount: {
      type: Number,
      default: 1,
    },
    imgUrl: {
      type: String,
      default: "",
    },
  },
  components: {
    'a-input': Input,
    'a-input-search': Input.Search,
    'a-row': Row,
    'a-col': Col,
    'a-input-number': InputNumber
  },
  setup() {


    return {

    };
  },
});
</script>

<style scoped>
.CartItemStyle {
  width: 60vw;
  margin-bottom: 50px;
  text-align: center;
  margin-left: 15vw;
  margin-top: 40px;
}
.itemDetailStyle {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.TagStyle {
  margin-left: 2vw;
}

.selected {
  margin: 50px 20px;
}
</style>
