import axios from 'axios'

// request 函数返回一个 axios 的实例
export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6"
  })

  // 拦截器将响应信息中的 data 对象返回了下来
  instance.interceptors.response
    .use(res => {
      console.log(res)
      return res.data
    }, error => {
      console.log(error)
    })

  // 这个没什么用，但是可以看到发送请求时的输出
  instance.interceptors.request
    .use(req => {
      console.log(req)
      return req
    },error => {
      console.log(error)
    })

  return instance(config)
}