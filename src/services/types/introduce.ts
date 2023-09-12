export type IntroduceActivityInfo = {
  startTime: string // 活动开始时间ms
  endTime: string // 活动结束时间ms
  count: number // 邀请人数
  refresh: boolean // 是否有新邀请
  logisticsFilledFlag: boolean // 物流填写
}
