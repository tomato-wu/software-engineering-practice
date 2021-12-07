import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()], // 配置需要使用的插件列表，这里将vue添加进去

  server: {
    open: true
  }

})

