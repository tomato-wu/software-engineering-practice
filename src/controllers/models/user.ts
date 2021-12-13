export interface LoginParams {
  loginName: string,
  password: string,
  Captcha: string
}

export interface RegistParams {
  loginName: string,
  password: string,
  newPass?: string
}

// 用户详情
export interface UserInfo {
  nickName: string,
  password: string,
  introduceSign: string
}

