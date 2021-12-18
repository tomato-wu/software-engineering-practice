import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { API } from '../../enum/api'

export const http: AxiosInstance = axios.create({
  // 代理服务在打包后就不存在了 => 可以通过执行服务器地址来解决跨域问题
  baseURL: import.meta.env.MODE === 'development'
    ? 'http://192.168.131.125:8080'
    // ? 'http://10.173.197.84:8080'
    // ? 'http://192.168.131.10:8080'
    : 'http://120.77.245.193/blog-system-hou',

  headers: {
    // 默认以form-data的形式传递数据给后台
    'Content-Type': 'application/json',
    // Accept: 'application/json'
  },
  withCredentials: true
})

// 请求拦截配置(针对当前项目一般是 application/json)
http.interceptors.request.use((config: AxiosRequestConfig) => {
  config.withCredentials = true
  if(config.url === API.Captcha)
    config.responseType = 'arraybuffer'
  return config
})

// 响应拦截配置(针对当前项目存在一些不同的 responseType)
http.interceptors.response.use((response: AxiosResponse) => {
  return response
})
