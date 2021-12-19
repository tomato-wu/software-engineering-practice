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

  <div class="tagBoxStyle" v-for="(item,index) in categories" :key="index">
    <!-- 标签分类 -->
    <TitleBar :title="item.categoryName" class="titleStyle"></TitleBar>
    <!-- 具体标签 -->
    <div>
      <a-tag
        color="blue"
        v-for="(Subitem,Subindex) in item.secondLevelBookCategoryList"
        :key="Subindex"
      >{{ Subitem.categoryName }}</a-tag>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Button, Row, Col, Tag } from "ant-design-vue";
import TitleBar from '../components/TitleBar.vue'
import SearchBoxVue from "../components/SearchBox.vue";
import { GetTagsItem } from "../controllers/tags";


export default defineComponent({
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    'a-tag': Tag,
    TitleBar,
    SearchBoxVue
  },
  setup() {

    const categories = ref([]) as any

    onMounted(async () => {
      categories.value = await GetTagsItem()
    })

    return {
      categories
    }
  },
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

function GetTagsItem(): any {
  throw new Error("Function not implemented.");
}

function GetTagsItem(): any {
  throw new Error("Function not implemented.");
}
