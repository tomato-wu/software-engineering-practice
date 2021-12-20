/* eslint-disable camelcase */
import { AxiosError, AxiosRequestHeaders, AxiosResponse } from "axios";
import { http } from "./axios";
import { IResponse, RequestParam } from "./types";

/**
 * 核心函数，可通过它处理一切请求数据 并做横向扩展
 * @param {url} 请求地址
 * @param {method} 请求方法
 * @param {param} 请求传递参数
 * @param {option} 附加配置
 */
export function XRequest(properties: RequestParam) {
  let data: { params?: any; data?: any; }
  const { url, method = 'get', param, headers, options } = properties
  // const CONTENT_TYPE = headers!['Content-Type']

  return new Promise((resolve: (value: any) => void, reject) => {
    if (options?.isMock) {
      // 配置mock的 url地址
    }

    if (options?.isToken) {
      // 配置 token(localStorage存储 login的 token)
      http.defaults.headers['common']['Authorization'] = `Bearer ${localStorage.getItem('token')}` || 'TOKEN'
    }

    if (method === 'get') {
      data = { params: param }
    }
    if (method === 'delete') {
      data = { params: param }
    }

    else if (method === 'post') {
      data = { data: JSON.stringify(param) }
    }

    // 实际的请求方法
    http({
      url,
      method,
      ...data,
    }).then((response: AxiosResponse) => {
      console.log(response);
      // 可根据具体情况进行定制配置
      const res_data: IResponse = response.data
      if (res_data) {
        resolve(res_data)
      }
    }).catch((err: AxiosError) => {
      reject(err)
    })
  })
}