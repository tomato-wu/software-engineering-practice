import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios from "axios";
import qs from 'qs'

export const http:AxiosInstance = axios.create({
  // 代理服务在打包后就不存在了 => 可以通过执行服务器地址来解决跨域问题
  baseURL: import.meta.env.MODE === 'development' ?
    import.meta.env.MODE ==='development'? '/local' : '/api' :
    'http://120.77.245.193/blog-system-hou',

  headers: {//默认以form-data的形式传递数据给后台
    Accept: 'application/json', 
  },
  //只能用于 post, put, patch->所以对 get无效？
  /*transformRequest: [
    function(data) {
      return data = qs.stringify(data);
    }
  ]*/
})

// 请求拦截配置 
http.interceptors.request.use((config:AxiosRequestConfig) => {
  // console.log(config)
  return config
})


// 响应拦截配置
/*http.interceptors.response.use((response:AxiosResponse) => {
  // const res = response.data
  //...主要是关于如何处理返回的到的数据
  // return res
})*/