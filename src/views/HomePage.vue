<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal" theme="dark">
    <a-menu-item key="mail">首页</a-menu-item>

    <a-menu-item key="app">分类</a-menu-item>

    <a-menu-item key="alipay">吕璟源是沙口</a-menu-item>
  </a-menu>

  <a-row class="searchBoxStyle">
    <a-col :span="3" :offset="4">
      <span class="logoText">叮叮图书</span>
    </a-col>
    <a-col :span="12">
      <SearchBoxVue />
    </a-col>
  </a-row>

  <a-row :gutter="16" style="margin-top:30px;">
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
  </a-row>
  <a-row :gutter="16" style="margin-top:30px;">
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
    <a-col class="gutter-row" :span="4">
      <BaseBookItemVue />
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu, Row, Col } from 'ant-design-vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import BaseBookItemVue from '../components/BaseBookItem.vue'
import SearchBoxVue from '../components/SearchBox.vue'

export default defineComponent({
  name: 'homePage',
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    'a-row': Row,
    'a-col': Col,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    BaseBookItemVue,
    SearchBoxVue
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
})
</script>

<style scoped>
.searchBoxStyle {
  margin-top: 20px;
}
.logoText {
  font-size: 25px;
}
</style>