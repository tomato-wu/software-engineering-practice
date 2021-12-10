<template>
  <!--book主容器-->
  <div class="book">
    <a-row :gutter="32">
      <a-col :span="6">
        <img src="../assets/csdn.jpg" class="book__image" />
      </a-col>
      <a-col :span="18">
        <div class="book__detail">
          <!--v-for 渲染作者 xxx等-->
          <div class="book__detail__line">
            <span>作者</span>
            <span>东野圭吾</span>
          </div>
          <div class="book__detail__line">
            <span>作者</span>
            <span>东野圭吾</span>
          </div>
          <div class="book__detail__line">
            <span>作者</span>
            <span>东野圭吾</span>
          </div>
          <!--书评信息-->
          <div class="book__detail__comment">内容区域</div>
          <a-button type="primary">借阅</a-button>
        </div>
      </a-col>
    </a-row>
    <hr class="hr-line" />
    <div class="book__aurthor">
      <span class="mg-bottom">作者简介</span>
      <span>xxxxxxxxx</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button, Row, Col } from "ant-design-vue";

export default defineComponent({
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
  },
  setup() {},
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
}

.hr-line {
  margin: 20px 0;
}

.book__aurthor {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.mg-bottom {
  margin: 0 0 30px;
}
</style>
