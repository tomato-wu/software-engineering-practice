import { createApp } from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
// 引入store
import store from './store'

import {
  Button
} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(store).use(Button).mount('#app')

