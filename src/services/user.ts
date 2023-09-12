import { UserInfoType } from './types/user'

import request from '@/utils/request'

export default {
  /**
   * 获取注册登录的验证码
   */
  getSmsCode: (mobile: string) => {
    return request.post('/code/send', {
      key: `+86${mobile}`,
      type: 12,
    })
  },
  /** 使用手机号验证码登录 */
  login: (mobile: string, smsCode: string) => {
    return request.post<UserInfoType>('/ns/qk/account/login-register', {
      mobile: `+86${mobile}`,
      smsCode,
    })
  },
}
