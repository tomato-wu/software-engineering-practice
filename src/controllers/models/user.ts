export interface LoginParams {
  username: string,
  password: string
}

export interface RegistParams extends LoginParams{
  newPass?: string
}

// 用户详情
export interface UserInfo {
  nickName: string,
  password: string,
  introduceSign: string
}

