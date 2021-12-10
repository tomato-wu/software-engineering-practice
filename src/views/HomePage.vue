<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
    <a-menu-item key="mail">首页</a-menu-item>
    <a-menu-item key="app">分类</a-menu-item>
    <a-menu-item key="alipay">吕璟源是沙口</a-menu-item>
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
    <a-col class="gutter-row margin-top-30" :span="6">
      <!--到时v-for拿数据渲染然后用 handleDetail跳转详情-->
      <BaseBookItemVue @click="handleDetail({ id: 1 })" />
    </a-col>
    <a-col class="gutter-row margin-top-30" :span="6">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row margin-top-30" :span="6">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row margin-top-30" :span="6">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row margin-top-30" :span="6">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row margin-top-30" :span="6">
      <BaseBookItemVue />
    </a-col>
  </a-row>

  <!--感觉一个row来包裹应该就好-->
  <!-- <a-row :gutter="16" style="margin-top: 30px"></a-row> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Menu, Row, Col } from "ant-design-vue";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons-vue";
import BaseBookItemVue from "../components/BaseBookItem.vue";
import SearchBoxVue from "../components/SearchBox.vue";
import { useRouter } from "vue-router";

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
    const handleDetail = (item: any) => {
      console.log(item.id);
      router.push("/detail/" + item.id);
    };
    return {
      current,
      handleDetail,
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
.gutter {
  text-align: center;
}
</style>
