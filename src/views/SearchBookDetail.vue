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
  <!-- 下边的图书项 -->
  <a-row v-for="(item,index) in SearchResult" :key="index">
    <SearchBookItem
      @click="handleDetail(item.id)"
      :bookName="item.bookName"
      :author="item.author"
      :publishingHouse="item.publishingHouse"
      :originalPrice="item.originalPrice"
      :yearOfPublication="item.yearOfPublication"
      :label="item.label"
      :imgUrl="item.imgUrl"
    />
  </a-row>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, onUpdated, ref } from "vue";
import { Button, Row, Col, Tag } from "ant-design-vue";
import TitleBar from '../components/TitleBar.vue'
import SearchBoxVue from "../components/SearchBox.vue";
import { useRoute } from "vue-router";
import { SearchBook } from "../controllers/homepage";
import SearchBookItem from '../components/SearchBookItem.vue'
import router from "../router";

export default defineComponent({
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    'a-tag': Tag,
    TitleBar,
    SearchBoxVue,
    SearchBookItem
  },
  setup() {

    const route = useRoute()
    const keyword = route.params.keyword as string
    const SearchResult = ref([]) as any
    onBeforeMount(async () => {
      SearchResult.value = await SearchBook(keyword)
      console.log(SearchResult.value);

    })
    const handleDetail = (item: any) => {
      console.log(item);
      router.push("/detail/" + item);
    };

    return {
      handleDetail,
      SearchResult
    }
  },
});
</script>

<style scoped>
.logoText {
  font-size: 25px;
}
.margin-top-30 {
  margin-top: 30px;
}
</style>
