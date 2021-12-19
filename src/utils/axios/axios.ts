import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { API } from '../../enum/api'
import { useGo } from '../usePage'

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
  if (config.url === API.Captcha)
    config.responseType = 'arraybuffer'

  // 当不是登录接口时在其他接口加上token
  // if (!config.url?.includes(API.LOGIN) && window.localStorage.getItem('token')) {
  //   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  // }
  return config
})

// 响应拦截配置(针对当前项目存在一些不同的 responseType)
http.interceptors.response.use((response: AxiosResponse) => {
  console.log(response);
  // if (response.data.code.includes('4') || response.data.code.includes('5')) {//说明请求很可能出现问题
  //   useGo()('/404')
  // }
  return response
})
