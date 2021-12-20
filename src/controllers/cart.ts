import { XRequest } from "../utils/axios"
import { LoginParams, RegistParams, updateCartParams } from "./models/user"
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
export async function deleteCartItemFun(bookId: Number) {
  return XRequest({
    url: `${API.CartItem}/${bookId}`,
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

// 修改购物车项
export async function updateCountFun(cartItemParam: updateCartParams) {
  return XRequest({
    url: `${API.CartItem}?bookId=${cartItemParam.bookId}&bookCount=${cartItemParam.bookCount}`,
    options: {
      isToken: true
    },
    method: 'PUT',
  }).then(async (data) => {
    message.success("修改成功")
    console.log(data);

    return Promise.resolve(data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 添加一项到购物车
export async function addBookCartItem(cartItemParam: updateCartParams) {
  return XRequest({
    url: API.CartItem,
    options: {
      isToken: true
    },
    method: 'post',
    param: cartItemParam
  }).then(async (data) => {
    message.success("添加成功")
    console.log(data);
    return Promise.resolve(data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 添加一项到购物车
export async function GetAllCartToOrderFun() {
  return XRequest({
    url: API.SaveOrder,
    options: {
      isToken: true
    },
    method: 'post',
  }).then(async (data) => {
    return Promise.resolve(data.data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 添加一项到购物车
export async function GetAllOrderDetail(orderId: number) {
  return XRequest({
    url: `${API.Order}/${orderId}`,
    options: {
      isToken: true
    },
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data.bookBriefVOList)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}