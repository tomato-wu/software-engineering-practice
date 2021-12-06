<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      Navigation One
    </a-menu-item>

    <a-menu-item key="app" disabled>
      <template #icon>
        <appstore-outlined />
      </template>
      Navigation Two
    </a-menu-item>

    <a-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
    </a-menu-item>
  </a-menu>

  <BaseBookItemVue />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Menu } from 'ant-design-vue'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue'
import BaseBookItemVue from '../component/BaseBookItem.vue'

export default defineComponent({
  name: 'homePage',
  components: {
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    BaseBookItemVue
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
</style>