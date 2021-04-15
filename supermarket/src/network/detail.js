import { request } from "./request"
export function getDetailData(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  }).then(res => {
    return res.result
  })
}

export function getRecommendData(){
  return request({
    url: "/recommend"
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.itemInfo = itemInfo
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopInfo = shopInfo
  }
}