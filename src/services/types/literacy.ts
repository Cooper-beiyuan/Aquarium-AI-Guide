export interface rightsStatusType {
  code: number
  data: {
    status: number
  }
}
export interface getRightsType {
  gameId: string
  uniqueId: number
  rightConfig: string
}
