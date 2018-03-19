import jsonp from '@/common/js/jsonp'
import { commonParams, options, baseUrl } from './config'

export function getLyric (mid) {
  const url = baseUrl + '/lyric'
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
}
