import axios from 'axios'
import jsonp from '@/common/js/jsonp'
import { commonParams, options } from './config'

/**
 * g_tk:5381
 * uin:0
 * format:json
 * inCharset:utf-8
 * outCharset:utf-8
 * notice:0
 * platform:h5
 * needNewCode:1
 * _:1506572164126
 */
export function getHotKey () {
  const url = '//c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}
/**
 * g_tk:5381
 * uin:0
 * format:json
 * inCharset:utf-8
 * outCharset:utf-8
 * notice:0
 * platform:h5
 * needNewCode:1
 * w:DJ舞曲(华语)系列5 DJ
 * zhidaqu:1
 * catZhida:1
 * t:0
 * flag:1
 * ie:utf-8
 * sem:1
 * aggr:0
 * perpage:20
 * n:20
 * p:1
 * remoteplace:txt.mqq.all
 * _:1506573555338
 * @param {*} query 查询字
 * @param {*} page 页数
 * @param {*} zhida  是否需要歌手信息
 */
export function search (query, page, zhida, perpage) {
  const url = '/api/search'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
    w: query,
    p: page,
    zhidaqu: zhida ? 1 : 0,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    inCharset: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all',
    _: 1506578276333
  })
  return axios(url, {
    params: data
  }).then(res => {
    console.log(res.data)
    return Promise.resolve(res.data)
  })
}
// g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&w=ui&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=1&remoteplace=txt.mqq.all&_=1506578276333

// g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=h5&uin=0&needNewCode=1&w=UI&p=1&zhidaqu=1&catZhida=1&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&remoteplace=txt.mqq.all&_=1506578276333
