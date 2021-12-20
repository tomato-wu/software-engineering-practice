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

// 修改购物项
export interface updateCartParams {
  bookId: any,
  bookCount: Number,
}

