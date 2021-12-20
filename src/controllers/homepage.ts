import { XRequest } from "../utils/axios"
import { LoginParams, RegistParams } from "./models/user"
import { API } from "../enum/api"
import { message } from "ant-design-vue"
// 页面跳转
import { useGo } from "../utils/usePage"
import { PageEnum } from "../enum/pageEnum"

// 首页导航栏
export async function GetNavItem() {
  return XRequest({
    url: API.NAV,
    method: 'get',
  }).then(async (data) => {
    console.log(data);
    return Promise.resolve(data.data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}
// 点击导航栏具体项获取数据
export async function GetNavDetail(typeId: String, pageNumber=5) {
  return XRequest({
    url: `${API.NAV_DETAIL}?typeId=${typeId}&&pageNumber=${pageNumber}`,
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data.records)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 获取每书本
export async function BookItem(pageNum: number) {
  return XRequest({
    url: `${API.BOOKITEM}?pageNum=${pageNum}`,
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 书本详情
export async function BookDetail(BookId: String) {
  return XRequest({
    url: `${API.BookDetail}/${BookId}`,
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 获取评论详情
export async function GetComments(BookId: String) {
  return XRequest({
    url: `${API.Comments}/${BookId}`,
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}

// 搜索书本
export async function SearchBook(BookName: String) {
  return XRequest({
    url: `${API.SearchBook}?keyword=${BookName}`,
    method: 'get',
  }).then(async (data) => {
    return Promise.resolve(data.data.records)
  }).catch(e => {
    console.log('报错了')
    console.log(e)
  })
}