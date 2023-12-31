import runtime from './runtime'
import { getCookie } from './storage'
import { getDevice } from './tools'

import { RuntimeType } from '@/common/type'
import { OpenCALink } from '@/pages/ca/contants'

/**
 * 分享图片给微信好友
 */
export const wechatShareImgToFriend = (imgUrl: string) => {
  window.location.href = `uniwebview://wechatsharetofriend?image=${imgUrl}`
}

/**
 * 分享图片给微信朋友圈
 */
export const wechatShareImgToMonments = (imgUrl: string) => {
  window.location.href = `uniwebview://WeChatShareToMoments?image=${imgUrl}`
}

/**
 *  APP内微信分享好友
 * @param title 标题
 * @param description 描述
 * @param url 网页链接
 * @param image 图片链接
 */
export const wechatShareToFriend = (
  title: string,
  description: string,
  url: string,
  image: string,
) => {
  window.location.href = `uniwebview://WeChatShareUrlToFriend?title=${title}&description=${description}&url=${window.encodeURIComponent(
    url,
  )}&urlImage=${window.encodeURIComponent(image)}`
}

/**
 * App内微信分享朋友圈
 * @param title 标题
 * @param description 描述
 * @param url 网页链接
 * @param image 图片链接
 */
export const weChatShareToMoments = (
  title: string,
  description: string,
  url: string,
  image: string,
) => {
  window.location.href = `uniwebview://WeChatShareUrlToMoments?title=${title}&description=${description}&url=${window.encodeURIComponent(
    url,
  )}&urlImage=${window.encodeURIComponent(image)}`
}

/**
 * App内回到首页
 */
export const goHome = () => {
  window.location.href = 'uniwebview://home'
}

/**
 * App内w喂食托托
 */
export const goFeedToto = () => {
  window.location.href = 'uniwebview://feedToto'
}

/**
 * 跳转套应用内商店
 *
accesspoint=HubButton 跳识字
accesspoint=Pinyin_Jump 跳拼音
 */
export const goGameStore = (params?: { accesspoint: string }) => {
  let paramsStr = ''
  if (params) {
    const { accesspoint } = params
    paramsStr = accesspoint ? `?accesspoint=${accesspoint}` : ''
  }
  window.location.href = `uniwebview://jumpto_gamestore${paramsStr}`
}

/**
 * 通知app H5登录完成
 */
export const notifyAppH5Login = () => {
  if (runtime.runtime !== RuntimeType.CA) {
    return
  }
  window.location.href = `uniwebview://weblogin?dptoken=${getCookie(
    'dptoken',
  )}&taltoken=${getCookie('talToken')}`
}

/** 端外H5打开CA --  app */
export const handleOpenCA = () => {
  const device = getDevice(3)
  window.location.href = OpenCALink[device]
}
