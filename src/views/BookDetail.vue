<template>
  <!--book主容器-->
  <div class="book">
    <a-row :gutter="32">
      <a-col :span="6">
        <img :src="bookDetail.imgUrl" class="book__image" />
      </a-col>
      <a-col :span="18">
        <div class="book__detail">
          <!-- 书名： -->
          <div class="book__detail__line">
            <span>书名:</span>
            <span>{{ bookDetail.bookName }}</span>
          </div>
          <!-- 作者 -->
          <div class="book__detail__line">
            <span>作者:</span>
            <span>{{ bookDetail.author }}</span>
          </div>
          <!-- 出版社 -->
          <div class="book__detail__line">
            <span>出版社:</span>
            <span>{{ bookDetail.publishingHouse }}</span>
          </div>
          <!-- 出版年 -->
          <div class="book__detail__line">
            <span>出版年:</span>
            <span>{{ bookDetail.yearOfPublication }}</span>
          </div>
          <!--定价  -->
          <div class="book__detail__line">
            <span>定价:</span>
            <span>{{ bookDetail.originalPrice }}</span>
          </div>
          <!-- 简介： -->
          <div class="book__detail__line">
            <span>简介：</span>
            <span>{{ bookDetail.briefIntroduction }}</span>
          </div>
          <!-- ISBN： -->
          <div class="book__detail__line">
            <span>ISBN：</span>
            <span>{{ bookDetail.isbn }}</span>
          </div>

          <!--书评信息-->
          <div class="book__detail__comment">
            <span>标签：</span>
            <a-tag color="blue" v-for="(item,index) in bookDetail.label" :key="index">{{ item }}</a-tag>
          </div>

          <a-button type="primary" danger class="BuyBtnStyle">购买</a-button>
          <a-button type="primary" class="AddCarStyle">添加购物车</a-button>
        </div>
      </a-col>
    </a-row>
    <hr class="hr-line" />
    <!-- 作者简介： -->
    <div class="book__aurthor">
      <TitleBar title="作者简介"></TitleBar>
      <span>{{ bookDetail.authorIntroduction }}</span>
    </div>
    <!-- 内容简介： -->
    <div class="book__aurthor">
      <TitleBar title="内容简介"></TitleBar>
      <span>{{ bookDetail.catalog }}</span>
    </div>
    <hr class="hr-line" />
    <!-- 评论 -->
    <TitleBar title="用户评论"></TitleBar>
    <div v-for="(item,index) in UserComments" :key="index">
      <Comments :username="item.username" :time="item.time" :comment="item.comment"></Comments>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Button, Row, Col, Tag } from "ant-design-vue";
import { useRoute } from "vue-router";
import { BookDetail, GetComments } from "../controllers/homepage";
import Comments from "../components/Comments.vue"
import TitleBar from '../components/TitleBar.vue'

export default defineComponent({
  name: "BookDetail",
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    'a-tag': Tag,
    Comments,
    TitleBar
  },
  setup() {
    const route = useRoute()
    const BookId = route.params.id as string
    const bookDetail = ref({}) as any
    const UserComments = ref([]) as any
    onMounted(async () => {
      bookDetail.value = await BookDetail(BookId);
      UserComments.value = await GetComments(BookId);

    })
    return {
      bookDetail,
      UserComments
    }
  },
});
</script>

<style scoped>
.book {
  width: 70%;
  padding-top: 100px;
  margin: auto;
}
.book__image {
  max-width: 100%;
  height: 300px;
}
.book__detail__line {
  display: flex;
  justify-content: start;
}

.book__detail__line span {
  line-height: 30px;
  margin-right: 50px;
}

.book__detail__comment {
  margin-top: 30px;
  text-align: start;
  display: flex;
  flex-direction: row;
}

.hr-line {
  margin: 20px 0;
}

.book__aurthor {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin-top: 30px;
}

.BuyBtnStyle {
  margin: 30px;
  width: 150px;
}
.AddCarStyle {
  width: 150px;
}
</style>
