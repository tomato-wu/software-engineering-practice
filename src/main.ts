import { createApp } from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
// 引入store
import store from './store'

import {
  Button,
  Row,
  Col
} from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

const app = createApp(App);
app.config.performance = true;

app.use(router).use(store).use(Button).use(Row).use(Col).mount('#app')
