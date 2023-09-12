export interface Data {
  status: number
  countdown: number
  code: number
  message: string
}

export interface IDouble11Status {
  status?: number
  countdown?: number
}

export const Double11Status = {
  0: 'Lock',
  1: 'Open',
  2: 'NearlyEnd',
  3: 'End',
}

export enum Double11StatusType {
  LOCK,
  OPEN,
  NearlyEnd,
}

export interface UrlParams {
  /** app内入口来源 */
  isWechat?: '0' | '1'
  dptoken?: string
  accessPoint?: string
  userGroup?: string
  vipStatus?: 'NoVIP' | 'VIPForever' | 'VIPShortTerm' | 'Expired' | 'Trial'
  isPay?: '0' | '1'
  testGroup?: 'A' | 'B'
  phoneNumber?: string
}

export enum AwardType {
  VOUCHER_50 = 0,
  VOUCHER_40 = 1,
  VOUCHER_30 = 2,
  VOUCHER_20 = 3,
  ABC_WEEK_CARD = 4,
  BAIKE_CARD = 5,
  FEED_TOTO = 6,
  PICTURE_BOOK = 7,
  COPY_BOOK = 8,
  DOLL = 9,
}

export interface AwardItemType {
  id: AwardType // 1- 50元优惠券 2-40元优惠券 3- 30元优惠券 4-20元优惠券  5-百科双周卡 6-ABC周卡 7-喂食托托 8-绘本 9字帖 10-公仔 11-未付费用户首次参与的奖励
  time: string
}

export interface Double11RecordType {
  date?: string
  shareCount?: number // number 分享次数统计
  count?: number // number 当前可转转盘的次数
  // 用户中奖记录
  awardList?: AwardItemType[]
}

export interface Double11Data {
  double11: Double11RecordType[]
}

export interface GrantDouble11AwardType {
  // 中奖商品的id
  id: number
  // 是否是h5环境
  isH5?: boolean
}
