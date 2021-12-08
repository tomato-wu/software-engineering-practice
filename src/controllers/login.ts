import { XRequest } from "../utils/axios"
import { LoginParams, RegistParams } from "./models/user"
import { API } from "../enum/api"
import { message } from "ant-design-vue"
import { useGo } from "../utils/usePage"
import { PageEnum } from "../enum/pageEnum"

/**
 * 登录接口
 * @param {LoginParam} 登录参数(用户名，密码)
 * @return void
 */

export async function useLogin(params: LoginParams) {
  XRequest({
    url: `${API.LOGIN}?loginName=${params.username}&password=${params.password}`,
    method: 'post'
  }).then(res => {
    if (res.code === 200) {
      message.success("登录成功")
      const go = useGo()
      go(PageEnum.HOMEPAGE)
    }
  })
}

/**
 * 注册接口
 * @param {LoginParam} 注册参数(用户名，密码，新密码)
 * @return void
 */

export function useRegist(params: RegistParams) {
  XRequest({ url: `${API.REGIST}?loginName=${params.username}&password=${params.password}`, method: 'post' }).then(res => {
    if (res.code === 200) {
      message.success("注册成功")
    }
  })
}


