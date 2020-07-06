// const BASE_URL = 'http://localhost:8082';
 const BASE_URL = 'http://192.168.0.104:8082'
export const http = (url,opt = {url:''}) => {
  return new Promise((resolve,reject) => {
    uni.request({
      url:BASE_URL + url + opt.url,
      method:opt.method || 'GET',
      data:opt.data || {},
      success:(res) => {
        if(res.data.status !== 0){
          return uni.showToast({
            icon:'none',
            title:'获取数据失败'
          })
        }
        resolve(res);
      },
      fail:(err) => {
        uni.showToast({
			    icon:'none',
          title:'请求接口失败'
        })
        reject(err)
      }
    })
  })
}
