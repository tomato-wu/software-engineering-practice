import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'

export const http: AxiosInstance = axios.create({
  // 代理服务在打包后就不存在了 => 可以通过执行服务器地址来解决跨域问题
  baseURL: import.meta.env.MODE === 'development'
    // ? 'http://192.168.131.125:8080'
    // ? 'http://10.173.197.84:8080'
    ? 'http://192.168.131.10:8080'
    : 'http://120.77.245.193/blog-system-hou',

  headers: {
    // 默认以form-data的形式传递数据给后台
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

// 请求拦截配置
http.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
})
