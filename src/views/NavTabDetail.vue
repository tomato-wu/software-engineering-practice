<template>
  <TitleBar title="分类书籍" class="titleStyle"></TitleBar>
  <a-row v-for="(item, index) in NavDetail" :key="index">
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
import { defineComponent, onMounted, ref } from "vue";
import { Button, Row, Col, Tag } from "ant-design-vue";
import { useRoute, useRouter } from "vue-router";
import { GetNavDetail } from "../controllers/homepage";
import Comments from "../components/Comments.vue";
import TitleBar from "../components/TitleBar.vue";
import SearchBookItem from "../components/SearchBookItem.vue";

export default defineComponent({
  name: "BookDetail",
  components: {
    "a-button": Button,
    "a-row": Row,
    "a-col": Col,
    "a-tag": Tag,
    Comments,
    TitleBar,
    SearchBookItem,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const typeId = route.params.typeId as any;
    const NavDetail = ref([]) as any;
    onMounted(async () => {
      NavDetail.value = await GetNavDetail(typeId);
    });

    // 跳转书本详情
    const handleDetail = (id: string) => {
      router.push("/detail/" + id);
    };

    return {
      NavDetail,
      handleDetail,
    };
  },
});
</script>

<style scoped>
.titleStyle {
  margin: 40px 20vw;
}
</style>
