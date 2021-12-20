import { XRequest } from "../utils/axios"
import { LoginParams, RegistParams } from "./models/user"
import { API } from "../enum/api"
import { message } from "ant-design-vue"
// 页面跳转
import { useGo } from "../utils/usePage"
import { PageEnum } from "../enum/pageEnum"

// 获取购物车列表
export async function GetCartItem() {
  return XRequest({
    url: API.CartItem,
    options: {
      isToken: true
    },
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 删除购物车项
export async function deleteCartItemFun(bookId: String) {
  return XRequest({
    url: `${API.DeleteCartItem}/${bookId}`,
    options: {
      isToken: true
    },
    method: 'DELETE',
  }).then(async (data) => {
    message.success("删除成功")
    return Promise.resolve(data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}
