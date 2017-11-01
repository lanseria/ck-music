// import axios from 'axios'
import jsonp from '@/common/js/jsonp'
import { commonParams, options, baseUrl } from './config'

export function getLyric (mid) {
  const url = baseUrl + '/api/lyric'
  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    platform: 'yqq',
    hostUin: 0,
    g_tk: 182355749,
    needNewCode: 0,
    format: 'json'
  })
  return jsonp(url, data, options)
  // return axios.get(url, {
  //   params: data
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // })
}

