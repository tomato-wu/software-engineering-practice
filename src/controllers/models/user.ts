export interface LoginParams {
  loginName: string,
  password: string,
  code: string
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

// 用户详情
export interface updateCartParams {
  bookId: string,
  bookCount: Number,
}

