import wx from 'weixin-js-sdk'

import { IWechatSDK } from './types/wechat'

import { WechatShareConfigType } from '@/common/type'
import request from '@/utils/request'
import wechat from '@/utils/wechat'

export default {
  /**
   * 初始化微信sdk
   */
  initWechatSDK: async (wechatShareConfig?: WechatShareConfigType, autoWxShare?: boolean) => {
    const { href } = window.location
    const check = encodeURIComponent(href)
    const response = await request.get<IWechatSDK>(`/wechat/ca/sign?url=${check}`)
    const {
      code,
      data: { appId, noncestr: nonceStr, signature, timestamp },
    } = response
    if (code !== 0) {
      return
    }
    wx.config({
      debug: false,
      appId,
      timestamp,
      nonceStr,
      signature,
      jsApiList: [
        'scanQRCode',
        'chooseWXPay',
        'getNetworkType',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'hideOptionMenu',
        'wx-open-launch-weapp',
      ],
      openTagList: ['wx-open-launch-weapp'],
    })
    wx.ready(() => {
      if (autoWxShare) {
        wechat.initWechatShare(wechatShareConfig)
      }
    })
  },
}
