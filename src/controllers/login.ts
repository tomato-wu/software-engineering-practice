import { XRequest } from "../utils/axios"
import { LoginParams, RegistParams } from "./models/user"
import { API } from "../enum/api"
import { message } from "ant-design-vue"
// 页面跳转
import { useGo } from "../utils/usePage"
import { PageEnum } from "../enum/pageEnum"

/**
 * 登录接口
 * @param {LoginParam} 登录参数(用户名，密码)
 * @return void
 */

const go = useGo()

export async function useLogin(params: LoginParams) {
  XRequest({
    url: API.LOGIN,
    method: 'post',
    param: params
  }).then(res => {
    if (res.code === 200) {
      localStorage.setItem('token', res.token)
      message.success("登录成功")
      // 存储token
      window.localStorage.setItem('token', res.data.token)
      const go = useGo()
      go(PageEnum.HOMEPAGE)
    } else {
      message.error("登录失败")
    }
  })
}

/**
 * 注册接口
 * @param {LoginParam} 注册参数(用户名，密码，新密码)
 * @return Promise
 */

export function useRegist(params: RegistParams) {
  XRequest({
    url: API.REGIST,
    method: 'post',
    param: params
  }).then(res => {
    if (res.code === 200) {
      go('/')
      message.success("注册成功")
    }
  })
}


/**
 * 获取验证码图片
 */

export function useGetCaptcha() {
  return XRequest({
    url: '/captcha',
    headers: {
      'Content-Type': 'image/jpeg'
    }
  })
}