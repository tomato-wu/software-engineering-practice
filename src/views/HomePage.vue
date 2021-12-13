<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
    <a-menu-item v-for="item in NavItem" :key="item.categoryId">{{ item.categoryName }}</a-menu-item>
  </a-menu>

  <a-row class="margin-top-30">
    <a-col :span="3" :offset="4">
      <span class="logoText">叮叮图书</span>
    </a-col>
    <a-col :span="12">
      <SearchBoxVue />
    </a-col>
  </a-row>

  <a-row :gutter="16" class="row">
    <a-col
      class="gutter-row margin-top-30"
      :span="6"
      v-for="(item,index) in bookItem.records"
      :key="index"
    >
      <!--到时v-for拿数据渲染然后用 handleDetail跳转详情-->
      <BaseBookItemVue
        @click="handleDetail({ id: 1 })"
        :bookName="item.bookName"
        :author="item.author"
        :imgUrl="item.imgUrl"
      />
    </a-col>
  </a-row>

  <!--感觉一个row来包裹应该就好-->
  <!-- <a-row :gutter="16" style="margin-top: 30px"></a-row> -->
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Menu, Row, Col } from "ant-design-vue";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import BaseBookItemVue from "../components/BaseBookItem.vue";
import SearchBoxVue from "../components/SearchBox.vue";
import { useRouter } from "vue-router";
import { BookItem, GetNavItem } from "../controllers/homepage";

export default defineComponent({
  name: "homePage",
  components: {
    "a-menu": Menu,
    "a-menu-item": Menu.Item,
    "a-row": Row,
    "a-col": Col,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    BaseBookItemVue,
    SearchBoxVue,
  },
  setup() {
    const current = ref<string[]>(["mail"]);
    const router = useRouter();
    const NavItem = ref([]) as any;
    const bookItem = ref([]) as any;

    onMounted(async () => {
      NavItem.value = await GetNavItem();
      bookItem.value = await BookItem(1);
      console.log(bookItem.value);

    })
    const handleDetail = (item: any) => {
      console.log(item.id);
      router.push("/detail/" + item.id);
    };

    return {
      current,
      handleDetail,
      NavItem,
      bookItem
    };
  },
});
</script>

<style scoped>
.margin-top-30 {
  margin-top: 30px;
}
.logoText {
  font-size: 25px;
}

.row {
  margin: 30px 0 0 !important;
}
.gutter-row {
  text-align: center;
}
</style>
