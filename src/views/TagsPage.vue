<template>
  <!-- 搜索框 -->
  <a-row class="margin-top-30 searchBox">
    <a-col :span="3" :offset="4">
      <span class="logoText">叮叮图书</span>
    </a-col>
    <a-col :span="12">
      <SearchBoxVue />
    </a-col>
  </a-row>

  <div class="tagBoxStyle">
    <TitleBar title="文学" class="titleStyle"></TitleBar>
    <div>
      <a-tag color="pink">pink</a-tag>
      <a-tag color="red">red</a-tag>
      <a-tag color="orange">orange</a-tag>
      <a-tag color="green">green</a-tag>
      <a-tag color="cyan">cyan</a-tag>
      <a-tag color="blue">blue</a-tag>
      <a-tag color="purple">purple</a-tag>
    </div>
    <div>
      <a-tag color="#f50">#f50</a-tag>
      <a-tag color="#2db7f5">#2db7f5</a-tag>
      <a-tag color="#87d068">#87d068</a-tag>
      <a-tag color="#108ee9">#108ee9</a-tag>
    </div>
  </div>

  <div class="tagBoxStyle">
    <TitleBar title="科学" class="titleStyle"></TitleBar>
    <div>
      <a-tag color="pink">pink</a-tag>
      <a-tag color="red">red</a-tag>
      <a-tag color="orange">orange</a-tag>
      <a-tag color="green">green</a-tag>
      <a-tag color="cyan">cyan</a-tag>
      <a-tag color="blue">blue</a-tag>
      <a-tag color="purple">purple</a-tag>
    </div>
    <div>
      <a-tag color="#f50">#f50</a-tag>
      <a-tag color="#2db7f5">#2db7f5</a-tag>
      <a-tag color="#87d068">#87d068</a-tag>
      <a-tag color="#108ee9">#108ee9</a-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button, Row, Col, Tag } from "ant-design-vue";
import TitleBar from '../components/TitleBar.vue'
import SearchBoxVue from "../components/SearchBox.vue";


export default defineComponent({
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    'a-tag': Tag,
    TitleBar,
    SearchBoxVue
  },
  setup() { },
});
</script>

<style scoped>
.titleStyle {
  margin: 30px;
}
.logoText {
  font-size: 25px;
}
.searchBox {
  margin-top: 30px;
}
.tagBoxStyle {
  padding: 30px;
}
</style>
