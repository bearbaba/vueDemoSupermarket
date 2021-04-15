import {request} from './request'

export function getHomeMultidataData(){
  return request({
    url: "/home/multidata"
  }).then(res=>{
    return res.data
  })
}

export function getHomeGoods(type, page){
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  }).then( res => {
    return res.data
  })
}