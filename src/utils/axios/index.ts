import { AxiosError, AxiosRequestHeaders, AxiosResponse } from "axios";
import { http } from "./axios";
import { IResponse, RequestParam } from "./types";
import qs from 'qs'

/**
 * 核心函数，可通过它处理一切请求数据 并做横向扩展
 * @param {url} 请求地址
 * @param {method} 请求方法
 * @param {param} 请求传递参数
 * @param {option} 附加配置
 */
export function XRequest(properties: RequestParam) {
  let data: { param?: any; data?: any; }
  const { url, method = 'get', param, headers, options } = properties
  // const CONTENT_TYPE = headers!['Content-Type']

  return new Promise((resolve:(value: AxiosResponse) => void, reject) => {
    if (options?.isMock) {
      // 配置mock的 url地址
    }

    //get 请求可使用 param 提交
    if (method === 'get') {
      data = { param }
    }
    //文件上传post请求不需要 qs 格式化数据
    else if (headers && headers['Content-Type'] === 'multipart/form-data') {
      data = { data: param }
    }
    //Content-Type: application/x-www-form-urlencoded (form表单) —— 需要 qs 格式化
    else if (method === 'post') {
      //post 请求使用 data 提交
      data = { data: qs.stringify(param) }
    }

    // 实际的请求方法
    http({
      url,
      method,
      ...data
    }).then((response: AxiosResponse) => {
      //可根据具体情况进行定制配置
      const res_data: IResponse = response.data
      if (res_data) {
        console.log(response)
        resolve(response)
      }
    }).catch((err: AxiosError) => {
      reject(err)
    })
  })
}